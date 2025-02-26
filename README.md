# MemeVerse - Meme Exploration & Generation Web App

## 📌 Project Overview

**MemeVerse** is a fun and interactive web application that allows users to explore, generate, and share memes. It provides an engaging platform for meme lovers to discover trending memes, create their own, and interact with the community.

## 🌟 Features

- **Explore Page**: Browse a variety of memes from the Memegen.link API.
- **Meme Generator**: Create custom memes with captions and upload images.
- **Infinite Scrolling**: Load memes dynamically as users scroll.
- **User Profile**: View uploaded memes, liked memes, and edit profile details.
- **Like & Comment System**: Users can like memes and leave comments (stored in local storage).
- **Dark Mode**: Toggle between light and dark themes.
- **Smooth Animations**: Enhanced UI experience with Framer Motion.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.

## 🛠️ Tech Stack

- **Frontend**: React.js, CSS
- **State Management**: Context API
- **API**: Memegen.link API
- **Animations**: Framer Motion
- **Local Storage**: Used for persisting user interactions (likes, comments, and profile details)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/memeverse.git
cd memeverse
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

The app will be available at `http://localhost:3000/`

## 📌 API Integration

This project uses the **Memegen.link API** to generate memes dynamically. No API key is required.

- Example API call:

```javascript
fetch('https://api.memegen.link/templates')
  .then(response => response.json())
  .then(data => console.log(data));
```

##

## 🤝 Contributing

Feel free to fork the repository and submit a pull request!

## 📜 License

This project is licensed under the MIT License.

