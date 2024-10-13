// components/NotesGenerator.tsx
import { useState } from 'react';
import axios from 'axios';

const notesGenerator = () => {
  const [topic, setTopic] = useState('');
  const [notes, setNotes] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateNotes = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('/api/generate-notes', { topic });
      setNotes(response.data);
    } catch (err) {
      setError('Failed to generate notes');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
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
          <pre>{JSON.stringify(notes, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default notesGenerator;
