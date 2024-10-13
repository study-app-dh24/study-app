// pages/api/generate-notes.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosError } from 'axios';

const PERPLEXITY_API_URL = 'https://api.perplexity.ai/chat/completions';
const API_KEY = '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';

interface PerplexityResponse {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { topic } = req.body;

  if (!topic) {
    return res.status(400).json({ error: 'Topic is required' });
  }

  try {
    const response = await axios.post<PerplexityResponse>(
      PERPLEXITY_API_URL,
      {
        model: "pplx-7b-online",
        messages: [
          { role: "system", content: "You are a helpful assistant that helps college level students with notes and quizzes." },
          { role: "user", content: `Generate college level quiz questions for the topic: ${topic} within 500 words` }
        ],
        max_tokens: 1000,
        timeout: 5000,
      },
      {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );

    const generatedContent = response.data.choices[0].message.content;
    console.log(generatedContent);
    return res.status(200).json({ notes: generatedContent });
  } catch (error: unknown) {
    console.error('Error details:', error);
    
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<{ error?: { message: string } }>;
      const errorMessage = axiosError.response?.data?.error?.message || 'Failed to generate notes';
      return res.status(axiosError.response?.status || 500).json({ error: errorMessage });
    }
    
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
    
    return res.status(500).json({ error: 'An unknown error occurred' });
  }
}