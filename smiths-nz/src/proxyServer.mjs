import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/claude', async (req, res) => {
  console.log('Incoming Request Body:', req.body); // Log the incoming request body
  const { messages, system } = req.body; // Extract `system` and `messages` from the request body

  if (!messages || !Array.isArray(messages)) {
    console.error('Invalid messages array:', messages);
    return res.status(400).send({ error: 'Invalid messages array' });
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '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',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 300,
        system, // Pass the system context as a top-level parameter
        messages, // Forward the messages array
      }),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Proxy Server Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});