// src/api/memeApi.js
export const fetchTrendingMemes = async () => {
    try {
      const response = await fetch('https://api.example.com/trending-memes');
      if (!response.ok) {
        throw new Error('Failed to fetch trending memes');
      }
      const data = await response.json();
      return data.memes; // Adjust this based on your API's response
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  
  // Optionally, keep fetchMemes if needed
  export const fetchMemes = async ({ page = 1, filter = 'Trending', search = '' }) => {
    // ... existing implementation
  };
  
  export const fetchMemeDetail = async (id) => {
    try {
      const response = await fetch(`https://api.example.com/memes/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch meme detail');
      }
      const data = await response.json();
      return data.meme; // Adjust according to your API response structure
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  export const fetchUserProfile = async () => {
    try {
      const response = await fetch(`https://api.example.com/user/profile`);
      if (!response.ok) {
        throw new Error('Failed to fetch profile data');
      }
      const data = await response.json();
      return {
        profile: data.profile, 
        uploadedMemes: data.uploadedMemes, 
        likedMemes: data.likedMemes
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  export const fetchLeaderboard = async () => {
    try {
      const response = await fetch(`https://api.example.com/leaderboard`);
      if (!response.ok) {
        throw new Error('Failed to fetch leaderboard data');
      }
      const data = await response.json();
      return {
        topMemes: data.topMemes,
        userRankings: data.userRankings,
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  