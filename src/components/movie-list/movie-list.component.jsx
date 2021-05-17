import React from 'react';

import MovieItem from '../movie-item/movie-item.component';

import './movie-list.styles.scss';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list row">
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
