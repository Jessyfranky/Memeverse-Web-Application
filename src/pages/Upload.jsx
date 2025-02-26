import React, { useState } from 'react';
import MemeGeneratorButton from '../components/MemeGeneratorButton';
import '../styles/Upload.css';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [template, setTemplate] = useState('doge');
  const [caption, setCaption] = useState('');
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  // Handle file selection (for local preview of uploaded image)
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFilePreview(URL.createObjectURL(file));
    }
  };

  // Generate meme using memegen.link and user caption
  const handleGenerateMeme = (e) => {
    e.preventDefault();
    const formattedCaption = caption.trim().replace(/ /g, '_') || 'no_caption';
    const url = `https://api.memegen.link/images/${template}/${formattedCaption}.jpg`;
    setGeneratedUrl(url);
    setUploadSuccess(false); // Reset upload success if a new meme is generated
  };

  // Simulate an API call to generate an AI-based caption
  const handleGenerateAICaption = async () => {
    setAiLoading(true);
    // Simulate network delay
    setTimeout(() => {
      const aiCaption = "When your code finally works";
      setCaption(aiCaption);
      setAiLoading(false);
    }, 1500);
  };

  // Handle "upload" after a meme is generated
  const handleUploadMeme = () => {
    if (!generatedUrl) return;

    // Retrieve current uploaded memes from localStorage
    const storedMemes = JSON.parse(localStorage.getItem("uploadedMemes")) || [];
    // Append new meme
    storedMemes.push(generatedUrl);
    localStorage.setItem("uploadedMemes", JSON.stringify(storedMemes));

    setUploadSuccess(true);
  };

  return (
    <div className="upload container fade-in">
      <h2 className="text-center">Upload or Generate Your Meme</h2>
      
      <div className="upload-section">
        <div className="upload-box">
          <h3>Upload an Image</h3>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {filePreview && (
            <div className="preview">
              <p>Preview:</p>
              <img src={filePreview} alt="Uploaded Meme" />
            </div>
          )}
          <p className="note">*Note: Actual upload functionality to a server can be added later.</p>
        </div>

        <div className="upload-box">
          <h3>Generate a Meme</h3>
          <form onSubmit={handleGenerateMeme} className="meme-form">
            <label>
              Template:
              <input
                type="text"
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                placeholder="e.g., doge"
              />
            </label>
            <label>
              Caption:
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="Enter a funny caption..."
                rows="3"
              />
            </label>
            <div className="button-group">
              <button type="submit" className="btn">Generate Meme</button>
              <button type="button" className="btn" onClick={handleGenerateAICaption}>
                {aiLoading ? "Generating..." : "AI Caption"}
              </button>
            </div>
          </form>
          {generatedUrl && (
            <div className="preview">
              <p>Your Generated Meme:</p>
              <img src={generatedUrl} alt="Generated Meme" />
              <button className="btn upload-btn" onClick={handleUploadMeme}>
                Upload Meme
              </button>
              {uploadSuccess && <p className="success-msg">Meme uploaded successfully!</p>}
            </div>
          )}
        </div>
      </div>

      <MemeGeneratorButton />
    </div>
  );
};

export default Upload;
