// src/components/MemeGeneratorButton.jsx
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import MemeGeneratorModal from './MemeGeneratorModal';
import '../styles/MemeGeneratorButton.css';

const MemeGeneratorButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="meme-gen-btn"
        title="Generate Meme"
      >
        <Plus size={24} />
      </button>
      <MemeGeneratorModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default MemeGeneratorButton;
