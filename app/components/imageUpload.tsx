import React, { useState } from 'react';
import { Storage } from 'aws-amplify';

const ImageUpload = () => {
  const [file, setFile] = useState(null);

  // Handle file input change
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  // Upload file to Amplify Storage (S3)
  const uploadFile = async () => {
    if (file) {
      try {
        const result = await Storage.put(file.name, file, {
          contentType: file.type, // Optional, automatically set if omitted
        });
        console.log('File uploaded successfully:', result);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload</button>
    </div>
  );
};

export default ImageUpload;
