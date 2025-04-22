export async function fetchClaudeResponse(conversationHistory, systemContext) {
  // Determine if we're running locally or in production
  const isLocalhost = 
    window.location.hostname === "localhost" || 
    window.location.hostname === "127.0.0.1";
  
  // Choose the appropriate API endpoint
  const apiUrl = isLocalhost 
    ? 'http://localhost:5000/api/claude'  // Local development
    : '/api/claude';                      // Netlify production

  try {
    console.log(`Using API endpoint: ${apiUrl}`);
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-3-7-sonnet-20250224',
        max_tokens: 300,
        system: systemContext,
        messages: conversationHistory,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Error:', errorText);
      throw new Error(`Failed to fetch response (Status: ${response.status})`);
    }

    const data = await response.json();
    console.log('Claude API Response:', data);

    return data.content[0].text.trim();
  } catch (error) {
    console.error('Error in fetchClaudeResponse:', error);
    throw error;
  }
}