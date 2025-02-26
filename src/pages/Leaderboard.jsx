// src/pages/Leaderboard.jsx
import React from 'react';
import MemeCard from '../components/MemeCard';
import '../styles/Leaderboard.css';

const mockLeaderboard = {
  topMemes: [
    {
      id: 'doge',
      name: 'Doge',
      preview: 'https://api.memegen.link/images/doge/so_much_code/very_react.jpg',
    },
    {
      id: 'fry',
      name: 'Futurama Fry',
      preview: 'https://api.memegen.link/images/fry/that_is_a_bad_idea/try_it.jpg',
    },
    // Add more mock memes as needed
  ],
  userRankings: [
    { name: 'Alice', engagementScore: 120 },
    { name: 'Bob', engagementScore: 95 },
    { name: 'Charlie', engagementScore: 85 },
    // More users...
  ],
};

const Leaderboard = () => {
  return (
    <div className="leaderboard container fade-in">
      <h1 className="text-center">Meme Leaderboard</h1>
      
      <section className="leaderboard-section">
        <h2>Top Memes</h2>
        <div className="grid-leaderboard">
          {mockLeaderboard.topMemes.map((meme) => (
            <MemeCard key={meme.id} meme={meme} />
          ))}
        </div>
      </section>

      <section className="leaderboard-section">
        <h2>User Rankings</h2>
        <ol className="rankings">
          {mockLeaderboard.userRankings.map((user, index) => (
            <li key={index}>
              <span className="user-name">{user.name}</span>
              <span className="score">{user.engagementScore} pts</span>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
};

export default Leaderboard;
