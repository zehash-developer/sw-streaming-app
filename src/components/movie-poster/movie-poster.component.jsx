import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './movie-poster.styles.scss';

// Lazy load images. Useful to maintain viewport height.
const MoviePoster = ({ src, alt }) => (
  <LazyLoadImage alt={alt} effect="blur" src={src} />
);

export default MoviePoster;
