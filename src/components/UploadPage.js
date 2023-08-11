import React, { useState } from 'react';
import './UploadPage.css'; // Import the CSS file

const UploadPage = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    // Limit the number of uploads to a maximum of 10
    const remainingSlots = Math.max(0, 10 - files.length);
    const newFiles = selectedFiles.slice(0, remainingSlots);
    setFiles([...files, ...newFiles]);
  };

  const handleUpload = () => {
    setUploading(true);
    // Simulate an upload process with setTimeout (replace with actual API call)
    setTimeout(() => {
      setUploading(false);
      alert('Upload completed!');
      setFiles([]);
    }, 2000);
  };

  return (
    <div className="upload-page">
      <div className="upload-content">
        <h1>Upload Page</h1>
        <input type="file" multiple className="file-input" onChange={handleFileChange} />
        <button className="upload-button" onClick={handleUpload} disabled={uploading || files.length === 0}>
          Upload
        </button>
        {uploading && <p>Uploading...</p>}
        <div>
          {files.map((file, index) => (
            <p key={index}>{file.name}</p>
          ))}
        </div>
        <div className="progress-bar">
          <div className="progress-bar-inner" style={{ width: `${(files.length / 10) * 100}%` }}></div>
        </div>
        <p className="progress-text">{files.length} / 10 files uploaded</p>
      </div>
    </div>
  );
};

export default UploadPage;
