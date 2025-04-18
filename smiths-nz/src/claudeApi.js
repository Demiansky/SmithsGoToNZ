export async function fetchClaudeResponse(conversationHistory, system) {
    try {
      console.log('Conversation History Sent to API:', conversationHistory); // Log the conversation history
  
      const response = await fetch('http://localhost:5000/api/claude', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 300,
          system, // Send the system context as a top-level parameter
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
      return data.content[0].text.trim(); // Adjust based on the API response structure
    } catch (error) {
      console.error('Error in fetchClaudeResponse:', error);
      throw error;
    }
  }