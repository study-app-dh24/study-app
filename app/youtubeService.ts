import axios from 'axios';

const API_KEY = 'AIzaSyArtoCipg_f_yIcJ5HfSTivDHCqXTVnTwY'; // Replace with your actual API key
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

interface Video {
    id: {
        videoId: string;
    };
    snippet: {
        title: string;
        thumbnails: {
            default: {
                url: string;
            };
        };
    };
}

export const searchVideos = async (query: string): Promise<Video[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/search`, {
            params: {
                part: 'snippet',
                q: query,
                key: API_KEY,
                type: 'video', // You can adjust the type as needed
            },
        });
        return response.data.items as Video[]; // Type assertion
    } catch (error) {
        console.error('Error fetching data from YouTube API:', error);
        throw error;
    }
};

export default Video;
