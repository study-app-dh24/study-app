const axios = require('axios');

const PERPLEXITY_API_URL = 'https://api.perplexity.ai/chat/completions'; // Ensure this is the correct URL
const API_KEY = ''; // Your API key
const TOPIC = 'Lines and Tangents'; // Your desired topic


async function testPerplexity() {
  try {
    const response = await axios.post(PERPLEXITY_API_URL, {
      model: "llama-3.1-sonar-small-128k-online", // Updated to a valid model name
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: `Generate notes for ${TOPIC}` }
      ],
      max_tokens: 5000,
    }, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Response:', response.data);
  } catch (error) {
    if (error.response) {
      console.error('Error:', error.response.data);
      console.error('Status Code:', error.response.status);
    } else if (error.request) {
      console.error('Request made but no response received:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
  }
}

testPerplexity();
