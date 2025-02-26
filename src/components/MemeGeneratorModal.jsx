// src/components/MemeGeneratorModal.jsx
import React, { useState } from 'react';
import { X } from 'lucide-react';
import '../styles/MemeGeneratorModal.css';

const MemeGeneratorModal = ({ isOpen, onClose }) => {
  const [template, setTemplate] = useState('doge');
  const [topText, setTopText] = useState('when you learn');
  const [bottomText, setBottomText] = useState('React hooks');
  const [generatedUrl, setGeneratedUrl] = useState('');

  if (!isOpen) return null;

  const handleGenerate = () => {
    const formattedTop = topText.trim().replace(/ /g, '_');
    const formattedBottom = bottomText.trim().replace(/ /g, '_');
    const url = `https://api.memegen.link/images/${template}/${formattedTop}/${formattedBottom}.jpg`;
    setGeneratedUrl(url);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content fade-in">
        <div className="modal-header">
          <h2>Generate a Meme</h2>
          <button onClick={onClose} className="close-btn" title="Close">
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          <label>Template:</label>
          <input
            type="text"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
          />
          <label>Top Text:</label>
          <input
            type="text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
          />
          <label>Bottom Text:</label>
          <input
            type="text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
          />
          <button onClick={handleGenerate} className="btn modal-btn">
            Generate Meme
          </button>
          {generatedUrl && (
            <div className="preview">
              <p>Your meme:</p>
              <img src={generatedUrl} alt="Generated Meme" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemeGeneratorModal;
