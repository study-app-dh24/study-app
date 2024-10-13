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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <button 
        onClick={handleGenerateNotes} 
        disabled={loading}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#007BFF',
          border: 'none',
          borderRadius: '5px',
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = loading ? '#007BFF' : '#0056b3'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = loading ? '#007BFF' : '#007BFF'}
      >
        {loading ? 'Generating...' : 'Create Notes'}
      </button>
      {error && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>{error}</p>}
      {Object.entries(notes).length > 0 && (
        <div style={{ marginTop: '20px', width: '100%' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '10px' }}>Generated Notes:</h2>
          {Object.entries(notes).map(([topic, content]) => (
            <div key={topic} style={{ 
              marginBottom: '20px', 
              padding: '15px', 
              border: '1px solid #ddd', 
              borderRadius: '10px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              backgroundColor: '#fff' // Card background color
            }}>
              <h3 style={{ fontSize: '1.5em', color: '#333' }}>{topic}</h3>
              <p style={{ color: '#555', lineHeight: '1.5' }}>{content}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesGenerator;
