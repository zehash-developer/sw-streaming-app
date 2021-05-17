import React from 'react';

import './movie-search.styles.scss';

const MovieSearch = ({ placeholder, handleChange }) => (
  <input
    className="search form-control"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);

export default MovieSearch;
