import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/MemeDetail.css";

const MemeDetail = () => {
  // Extract the meme id from URL parameters
  const { id } = useParams();

  // We'll assume that the meme's details (like its image URL and title)
  // are generated based on the id or stored in localStorage.
  // For this example, we simulate retrieving details from localStorage.
  // You can adjust this logic if you integrate a real backend.

  const [meme, setMeme] = useState(null);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [liked, setLiked] = useState(false);

  // On component mount, load meme details, likes, and comments from localStorage.
  useEffect(() => {
    // Simulated meme detail - in a real app, you'd fetch from an API
    const storedMeme = JSON.parse(localStorage.getItem("memes"))?.find(m => m.id === id) || {
      id,
      title: `Meme ${id}`,
      imageUrl: `https://api.memegen.link/images/doge/when_you_see_dynamic_routing/${id}.jpg`,
    };
    setMeme(storedMeme);

    // Load likes and comments for this meme from localStorage
    const storedLikes = JSON.parse(localStorage.getItem("memeLikes")) || {};
    setLikes(storedLikes[id] || 0);

    const storedComments = JSON.parse(localStorage.getItem("memeComments")) || {};
    setComments(storedComments[id] || []);

    // Load whether the current user has liked this meme (simulate with localStorage flag)
    const storedUserLikes = JSON.parse(localStorage.getItem("userLikedMemes")) || {};
    setLiked(!!storedUserLikes[id]);
  }, [id]);

  // Handle like button click
// In MemeDetail.jsx
const handleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    const updatedLikes = newLiked ? likes + 1 : likes - 1;
    setLikes(updatedLikes);
  
    // Update memeLikes in localStorage (for total like count)
    const storedLikes = JSON.parse(localStorage.getItem("memeLikes")) || {};
    storedLikes[id] = updatedLikes;
    localStorage.setItem("memeLikes", JSON.stringify(storedLikes));
  
    // Update user's liked memes in localStorage
    const storedUserLikes = JSON.parse(localStorage.getItem("userLikedMemes")) || {};
    let storedLikedMemes = JSON.parse(localStorage.getItem("likedMemes")) || [];
  
    if (newLiked) {
      storedUserLikes[id] = true;
      // Add this meme to likedMemes array if not already added
      // (Assuming meme is an object with id, title, imageUrl)
      if (!storedLikedMemes.find(m => m.id === id)) {
        storedLikedMemes.push(meme);
      }
    } else {
      delete storedUserLikes[id];
      // Remove this meme from likedMemes array
      storedLikedMemes = storedLikedMemes.filter(m => m.id !== id);
    }
  
    localStorage.setItem("userLikedMemes", JSON.stringify(storedUserLikes));
    localStorage.setItem("likedMemes", JSON.stringify(storedLikedMemes));
  };
  

  // Handle adding a new comment
  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    const updatedComments = [...comments, newComment.trim()];
    setComments(updatedComments);
    setNewComment("");

    // Save updated comments in localStorage
    const storedComments = JSON.parse(localStorage.getItem("memeComments")) || {};
    storedComments[id] = updatedComments;
    localStorage.setItem("memeComments", JSON.stringify(storedComments));
  };

  // Handle sharing: for now, copy the current URL to clipboard
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert("Meme URL copied to clipboard!"))
      .catch(() => alert("Failed to copy link."));
  };

  if (!meme) {
    return (
      <div className="meme-detail container">
        <p>Loading meme details...</p>
      </div>
    );
  }

  return (
    <div className="meme-detail container fade-in">
      <h1>{meme.title}</h1>
      <div className="meme-image-container">
        <img src={meme.imageUrl} alt={meme.title} className="meme-image" />
      </div>
      <div className="meme-actions">
        <button 
          className={`like-btn ${liked ? "liked" : ""}`} 
          onClick={handleLike}
          title="Like"
        >
          {liked ? "❤️" : "🤍"} {likes}
        </button>
        <button className="share-btn btn" onClick={handleShare}>
          Share
        </button>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        <h2>Comments</h2>
        <form onSubmit={handleAddComment} className="comment-form">
          <input 
            type="text" 
            value={newComment} 
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
          />
          <button type="submit" className="btn">Post</button>
        </form>
        <div className="comments-list">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} className="comment">
                {comment}
              </div>
            ))
          ) : (
            <p>No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemeDetail;
