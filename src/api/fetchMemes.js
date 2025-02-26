// src/api/fetchMemes.js
import { memeTemplates } from "./memeTemplates";

export const fetchMemes = async ({ page, category, searchTerm, sortBy }) => {
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Generate 10 dummy memes for the given page
  const dummyMemes = Array.from({ length: 10 }, (_, i) => {
    // Randomly select a template from the curated list
    const randomTemplate = memeTemplates[Math.floor(Math.random() * memeTemplates.length)];
    const id = `meme-${page}-${i}-${randomTemplate.id}`;
    // Use searchTerm or a default caption based on category
    const caption = searchTerm.trim() || category.toLowerCase();
    const formattedCaption = encodeURIComponent(caption);
    return {
      id,
      title: `${randomTemplate.name} Meme ${id}`,
      // Build the image URL using memegen.link API format:
      imageUrl: `https://api.memegen.link/images/${randomTemplate.id}/${formattedCaption}.jpg`,
      likes: Math.floor(Math.random() * 100),
      date: Date.now() - i * 100000, // descending by date
      comments: Math.floor(Math.random() * 50)
    };
  });

  // Apply sort options on dummy data
  if (sortBy === "likes") {
    dummyMemes.sort((a, b) => b.likes - a.likes);
  } else if (sortBy === "date") {
    dummyMemes.sort((a, b) => b.date - a.date);
  } else if (sortBy === "comments") {
    dummyMemes.sort((a, b) => b.comments - a.comments);
  }

  return dummyMemes;
};
