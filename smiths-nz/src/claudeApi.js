export async function fetchClaudeResponse(conversationHistory, systemContext) {
  try {
    const response = await fetch('http://localhost:5000/api/claude', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'claude-3-7-sonnet-20250224',
        max_tokens: 300,
        system: systemContext, // system context regarding role playing.  Helps to enforce overall context.
        messages: conversationHistory, // Send the conversation history
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Proxy API Error:', errorText);
      throw new Error('Failed to fetch response from proxy server');
    }

    const data = await response.json();
    console.log('Claude API Response:', data); // Log the full response

    // Extract the response content from the first object in the array
  //  if (!data.content || !Array.isArray(data.content) || !data.content[0]?.content) {
  //    throw new Error('Claude API did not return a valid content field');
  //  }

    return data.content[0].text.trim(); // Return the bot's response
  } catch (error) {
    console.error('Error in fetchClaudeResponse:', error);
    throw error;
  }
}