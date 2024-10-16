'use client';

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

// Define the props interface
interface VideoSearchProps {
    topics: string[]; // Array of topics as a prop
}

const VideoSearch: React.FC<VideoSearchProps> = ({ topics }) => {
    const [videos, setVideos] = useState<Video[]>([]); // Store selected videos from each topic
    const [error, setError] = useState<string | null>(null);

    // Fetch videos for each topic on component mount
    useEffect(() => {
        const fetchVideos = async () => {
            setError(null); // Clear any previous errors
            const selectedVideos: Video[] = []; // Array to collect one video from each topic
            try {
                // Fetch videos for each topic
                for (const topic of topics) {
                    const results = await searchVideos(topic);
                    if (results.length > 0) {
                        selectedVideos.push(results[0]); // Add the first video found for the topic
                    }
                }
                setVideos(selectedVideos); // Update the state with the selected videos
            } catch (error) {
                setError('An error occurred while fetching videos.');
                console.error('Error during video search:', error);
            }
        };

        if (topics.length > 0) {
            fetchVideos();
        } else {
            setError('No topics provided.');
        }
    }, [topics]); // Run this effect when topics change

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            {error && <p style={{ color: 'red', fontWeight: 'bold', textAlign: 'center' }}>{error}</p>}
            <div>
                {videos.length > 0 ? (
                    videos.map((video) => (
                        <div key={video.id.videoId} style={{ 
                            marginBottom: '20px', 
                            padding: '15px', 
                            border: '1px solid #ddd', 
                            borderRadius: '10px', 
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            backgroundColor: '#fff' // Card background color
                        }}>
                            <h3 style={{ textAlign: 'center', fontSize: '1.5em', color: '#333' }}>{video.snippet.title}</h3>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <iframe
                                    width="560"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                    title={video.snippet.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    style={{ borderRadius: '15px', marginTop: '10px' }} // Spacing for iframe
                                ></iframe>
                            </div>
                        </div>
                    ))
                ) : (
                    <p style={{ textAlign: 'center', color: '#666' }}>No videos found for the given topics.</p>
                )}
            </div>
        </div>
    );
};

export default VideoSearch;
