import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post('/api/claude', async (req, res) => {
  console.log('Incoming Request Body:', req.body);
  const { messages, system } = req.body;

  if (!messages || !Array.isArray(messages)) {
    console.error('Invalid messages array:', messages);
    return res.status(400).send({ error: 'Invalid messages array' });
  }

  // Get API key from environment variables
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error('API key not found in environment variables');
    return res.status(500).send({ error: 'API configuration error' });
  }

  try {
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
    res.json(data);
  } catch (error) {
    console.error('Proxy Server Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});