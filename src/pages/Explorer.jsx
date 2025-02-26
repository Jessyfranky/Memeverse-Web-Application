import React, { useState, useEffect, useCallback } from 'react';
import MemeCard from '../components/MemeCard';
import MemeGeneratorButton from '../components/MemeGeneratorButton';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import { fetchMemes } from '../api/fetchMemes';
import { debounce } from '../utils/debounce';
import '../styles/Explorer.css';

const categories = ['Trending', 'New', 'Classic', 'Random'];
const sortOptions = ['likes', 'date', 'comments'];

const Explorer = () => {
  const [memes, setMemes] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState(categories[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState(sortOptions[0]);
  const [hasMore, setHasMore] = useState(true);

  // Function to load memes
  const loadMemes = useCallback(async () => {
    const newMemes = await fetchMemes({ page, category, searchTerm, sortBy });
    if (newMemes.length === 0) {
      setHasMore(false);
    } else {
      setMemes((prev) => [...prev, ...newMemes]);
      setPage(prev => prev + 1);
    }
  }, [page, category, searchTerm, sortBy]);

  // Use infinite scrolling hook
  const [isFetching] = useInfiniteScroll(loadMemes);

  // Reset memes on category, search, or sort change
  useEffect(() => {
    setMemes([]);
    setPage(1);
    setHasMore(true);
    loadMemes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, sortBy, searchTerm]);

  // Debounced search handler
  const handleSearchChange = debounce((value) => {
    setSearchTerm(value);
  }, 500);

  return (
    <div className="explorer container fade-in">
      <h1 className="text-center">Explore Meme Templates</h1>

      {/* Filters */}
      <div className="filters">
        <div className="filter-group">
          <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <label>Sort By:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-group search-group">
          <label>Search:</label>
          <input
            type="text"
            placeholder="Search memes..."
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
      </div>

      {/* Grid of Memes */}
      <div className="grid-templates">
        {memes.map((meme) => (
          <MemeCard key={meme.id} meme={meme} />
        ))}
      </div>

      {isFetching && hasMore && (
        <div className="loading text-center">
          <p>Loading more memes...</p>
        </div>
      )}

      {!hasMore && (
        <div className="end-message text-center">
          <p>No more memes found.</p>
        </div>
      )}

      <MemeGeneratorButton />
    </div>
  );
};

export default Explorer;
