'use client';

// components/NotesGenerator.tsx
import { useState } from 'react';
import axios from 'axios';

interface NotesGeneratorProps {
  topics: string[]; // Define the props interface for topics
}

const NotesGenerator: React.FC<NotesGeneratorProps> = ({ topics }) => {
  const [notes, setNotes] = useState<{ [key: string]: string | null }>({}); // Store notes for each topic
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateNotes = async () => {
    setLoading(true);
    setError(null);
    setNotes({}); // Clear previous notes

    try {
      const notesPromises = topics.map(async (topic) => {
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
        return { topic, content: response.data.choices[0].message.content };
      });

      const generatedNotes = await Promise.all(notesPromises);
      const notesObject = generatedNotes.reduce((acc, { topic, content }) => {
        acc[topic] = content; // Assign notes to the corresponding topic
        return acc;
      }, {} as { [key: string]: string });

      setNotes(notesObject); // Update the state with all generated notes
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button onClick={handleGenerateNotes} disabled={loading}>
        {loading ? 'Generating...' : 'Create Notes'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {Object.entries(notes).length > 0 && (
        <div>
          <h2>Generated Notes:</h2>
          {Object.entries(notes).map(([topic, content]) => (
            <div key={topic} style={{ marginBottom: '20px' }}>
              <h3>{topic}</h3>
              <p>{content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesGenerator;
