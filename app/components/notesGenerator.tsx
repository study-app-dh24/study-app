'use client'

// components/NotesGenerator.tsx
import { useState } from 'react';
import axios from 'axios';


const NotesGenerator = () => {
  const [topic, setTopic] = useState('Lines and Tangents');
  const [notes, setNotes] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateNotes = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        'https://api.perplexity.ai/chat/completions',
        {
          model: "llama-3.1-sonar-small-128k-online", // Use an appropriate model
          messages: [
            { role: "system", content: "You are a helpful AI assistant." },
            { role: "user", content: `Generate notes on the topic: ${topic} within 500 words` }
          ],
          max_tokens: 500,
          timeout: 50000,
        },
        {
          headers: {
            'Authorization': `Bearer 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`, // Replace with your actual API key
            'Content-Type': 'application/json'
          }
        }
      );

      setNotes(response.data.choices[0].message.content);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Axios error:', err.response?.data);
        setError('Failed to generate notes: ' + (err.response?.data?.error?.message || 'unknown error'));
      } else {
        console.error('Unexpected error:', err);
        setError('Failed to generate notes');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h1>Notes Generator</h1>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter topic (e.g., Calculus, Java)"
      />
      <button onClick={handleGenerateNotes} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Notes'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {notes && (
        <div>
          <h2>Generated Notes:</h2>
            <p>{notes}</p>
        </div>
      )}
    </div>
  );
};

export default NotesGenerator;