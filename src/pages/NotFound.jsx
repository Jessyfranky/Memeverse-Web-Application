import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="p-8 text-center">
      <h2 className="text-4xl font-bold mb-4">404</h2>
      <p className="mb-4">Oops! It looks like this meme doesn't exist.</p>
      <Link to="/" className="text-blue-500 underline">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
