import React from 'react';
import MemeCard from '../components/MemeCard';
import MemeGeneratorButton from '../components/MemeGeneratorButton';
import '../styles/Home.css';

const templates = [
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
  {
    id: 'matrix',
    name: 'Matrix',
    preview: 'https://api.memegen.link/images/matrix/what_if_we/just_keep_coding.jpg',
  },
  // More templates...
];

const Home = () => {
  return (
    <div className="home container fade-in">
      <h1 className="text-center">Welcome to MemeVerse</h1>
      <p className="text-center" style={{ marginBottom: '2rem' }}>
        Choose a meme template to start generating your custom meme.
      </p>
      <div className="grid-templates">
        {templates.map((template) => (
          <MemeCard key={template.id} meme={template} />
        ))}
      </div>
      <MemeGeneratorButton />
    </div>
  );
};

export default Home;
