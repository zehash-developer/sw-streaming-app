import React from 'react';

import MoviePoster from '../movie-poster/movie-poster.component';

import './movie-item.styles.scss';

const MovieItem = ({ title, actors, imageUrl, providers }) => {
  return (
    <div className="movie-item col-lg-3 col-md-4 col-sm-6 col-xs-12">
      <MoviePoster src={imageUrl} alt={title} />
      <div className="movie-details">
        <span className="movie-title">{title}</span>

        <span className="movie-actors">Staring: {actors}</span>
        {providers.map((provider) => (
          <div
            className={`movie-comparison ${
              provider.isCheaper ? 'cheaper-option' : ''
            }`}
          >
            <span className="movie-provider">{provider.name}</span>
            <span className="movie-price">${provider.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieItem;
