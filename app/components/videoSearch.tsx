import React, { useEffect, useState } from 'react';
import { searchVideos } from '../youtubeService'; // Adjust the import path as necessary

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


const topics = ["Tangents to circles","Tangents and velocity","Limits"]; // Define your topics here

const videoSearch: React.FC = () => {
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
    const [error, setError] = useState<string | null>(null);

    // Fetch the first video for each topic on component mount
    useEffect(() => {
        const fetchVideos = async () => {
            setError(null); // Clear any previous errors
            try {
                // Fetch the first video for each topic
                for (const topic of topics) {
                    const results = await searchVideos(topic);
                    if (results.length > 0) {
                        // Set the first video found for the first topic as the selected video
                        setSelectedVideo(results[0]);
                        break; // Exit after finding the first video
                    }
                }
            } catch (error) {
                setError('An error occurred while fetching videos.');
                console.error('Error during video search:', error);
            }
        };

        fetchVideos();
    }, []); // Run this effect only once on mount

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {selectedVideo && (
                <div>
                    <h3 style={{ color: 'black' }}>{selectedVideo.snippet.title}</h3>
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                        title={selectedVideo.snippet.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            )}
        </div>
    );
};

export default videoSearch;
