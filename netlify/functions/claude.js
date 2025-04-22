const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  // Allow only POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    // Parse the incoming request body
    const requestBody = JSON.parse(event.body);
    const { messages, system } = requestBody;
    
    if (!messages || !Array.isArray(messages)) {
      return { 
        statusCode: 400, 
        body: JSON.stringify({ error: 'Invalid messages array' })
      };
    }

    // Get API key from environment variables
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return { 
        statusCode: 500, 
        body: JSON.stringify({ error: 'API configuration error' })
      };
    }

    // Call Anthropic API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 300,
        system,
        messages,
      }),
    });

    const data = await response.json();
    
    // Return the API response
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Function error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};