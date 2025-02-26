// src/components/MemeCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MemeCard.css';

const MemeCard = ({ meme }) => {
  // Ensure that meme.id exists. You could use a template id or a unique identifier generated when the meme is created.
  return (
    <Link to={`/meme/${meme.id}`} className="meme-card fade-in">
      <img src={meme.preview || meme.imageUrl} alt={meme.name} />
      <div className="card-body">
        <h3>{meme.name}</h3>
      </div>
    </Link>
  );
};

export default MemeCard;
