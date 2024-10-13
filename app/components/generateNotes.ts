// pages/api/generate-notes.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const PERPLEXITY_API_URL = 'https://api.perplexity.ai/generate'; // Update this with the correct endpoint

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ error: 'Topic is required' });
  }

  try {
    const response = await axios.post(PERPLEXITY_API_URL, {
      prompt: `Generate notes for ${topic}`,
      max_tokens: 500, // Adjust this as needed
    }, {
      headers: {
        'Authorization': `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`, // Replace with your Perplexity API key
        'Content-Type': 'application/json',
      },
    });

    const notes = response.data;
    return res.status(200).json(notes);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Failed to generate notes' });
  }
}
