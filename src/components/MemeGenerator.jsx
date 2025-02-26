import React, { useState } from 'react';

const MemeGenerator = () => {
  const [template, setTemplate] = useState('doge');
  const [topText, setTopText] = useState('when you learn');
  const [bottomText, setBottomText] = useState('React hooks');
  const [generatedUrl, setGeneratedUrl] = useState('');

  const handleGenerate = () => {
    // Format text for URL: replace spaces with underscores
    const formattedTop = topText.trim().replace(/ /g, '_');
    const formattedBottom = bottomText.trim().replace(/ /g, '_');
    // Build the URL as per memegen.link docs
    const url = `https://api.memegen.link/images/${template}/${formattedTop}/${formattedBottom}.jpg`;
    setGeneratedUrl(url);
  };

  return (
    <div className="p-8 border rounded shadow-md bg-white dark:bg-gray-800">
      <h2 className="text-2xl font-bold mb-4">Generate Your Meme</h2>
      <div className="mb-4">
        <label className="block mb-1">Template:</label>
        <input
          type="text"
          value={template}
          onChange={(e) => setTemplate(e.target.value)}
          placeholder="e.g., doge"
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Top Text:</label>
        <input
          type="text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
          placeholder="Enter top text"
          className="border p-2 rounded w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Bottom Text:</label>
        <input
          type="text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
          placeholder="Enter bottom text"
          className="border p-2 rounded w-full"
        />
      </div>
      <button
        onClick={handleGenerate}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generate Meme
      </button>
      {generatedUrl && (
        <div className="mt-4">
          <p className="mb-2">Your generated meme:</p>
          <img src={generatedUrl} alt="Generated Meme" className="max-w-full rounded" />
        </div>
      )}
    </div>
  );
};

export default MemeGenerator;
