import React, { useState, useEffect } from "react";
import "../styles/Profile.css";

const Profile = () => {
  // Initialize profile data from localStorage or defaults.
  const storedProfile = JSON.parse(localStorage.getItem("userProfile")) || {
    name: "John Doe",
    bio: "Just a meme enthusiast!",
    profilePic: "https://i.pravatar.cc/150?img=5",
  };

  const [user, setUser] = useState(storedProfile);
  const [uploadedMemes, setUploadedMemes] = useState([]);
  const [likedMemes, setLikedMemes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [picPreview, setPicPreview] = useState(user.profilePic);

  // Load user-uploaded and liked memes from localStorage
  useEffect(() => {
    const savedMemes = JSON.parse(localStorage.getItem("uploadedMemes")) || [];
    setUploadedMemes(savedMemes);
    
    const savedLikes = JSON.parse(localStorage.getItem("likedMemes")) || [];
    setLikedMemes(savedLikes);
  }, []);

  // Update localStorage when profile changes
  // In Profile.jsx
useEffect(() => {
    const savedLikes = JSON.parse(localStorage.getItem("likedMemes")) || [];
    setLikedMemes(savedLikes);
  }, []);
  

  // Handler for when the user selects a new profile image file
  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a temporary URL for previewing the image from local computer
      const previewUrl = URL.createObjectURL(file);
      setPicPreview(previewUrl);
      setUser({ ...user, profilePic: previewUrl });
    }
  };

  const handleEditProfile = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // user profile is saved via the effect
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-pic-container">
          <img src={picPreview} alt="Profile" className="profile-pic" />
          {isEditing && (
            <label htmlFor="profilePicInput" className="upload-overlay">
              Change Picture
              <input
                type="file"
                id="profilePicInput"
                accept="image/*"
                onChange={handleProfilePicChange}
                style={{ display: "none" }}
              />
            </label>
          )}
        </div>
        {isEditing ? (
          <form className="edit-profile-form" onSubmit={handleEditProfile}>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              placeholder="Your Name"
            />
            <input
              type="text"
              value={user.bio}
              onChange={(e) => setUser({ ...user, bio: e.target.value })}
              placeholder="Your Bio"
            />
            <button type="submit" className="save-btn">
              Save
            </button>
          </form>
        ) : (
          <div className="profile-info">
            <h2>{user.name}</h2>
            <p>{user.bio}</p>
            <button onClick={() => setIsEditing(true)} className="edit-btn">
              Edit Profile
            </button>
          </div>
        )}
      </div>

      {/* Uploaded Memes Section */}
      <h3>Your Uploaded Memes</h3>
      <div className="meme-grid">
        {uploadedMemes.length > 0 ? (
          uploadedMemes.map((meme, index) => (
            <img
              key={index}
              src={meme}
              alt="Uploaded Meme"
              className="meme-img"
            />
          ))
        ) : (
          <p>No memes uploaded yet.</p>
        )}
      </div>

      {/* Liked Memes Section */}
      <h3>Liked Memes</h3>
<div className="meme-grid">
  {likedMemes.length > 0 ? (
    likedMemes.map((meme) => (
      <img key={meme.id} src={meme.imageUrl} alt={meme.title} className="meme-img" />
    ))
  ) : (
    <p>You haven't liked any memes yet.</p>
  )}
</div>

    </div>
  );
};

export default Profile;
