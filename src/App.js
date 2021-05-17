import React, { Component } from 'react';

import MovieSearch from './components/movie-search/movie-search.component';
import MovieList from './components/movie-list/movie-list.component';

// Import and destructure methods that get data.
import {
  getMoviesData,
  formatMoviesData,
  getCachedData,
  setCachedData,
} from '../src/util/movie.data';

import './App.css';

class App extends Component {
  constructor() {
    super();

    // state should only contain a movies data array and a search term field.
    this.state = {
      searchTerm: '',
      movies: [],
    };
  }

  // On component first load - load up the data from the api
  // First check if session storage has movies saved - use cached data
  // If no Cached data exists then use the API call to get more data.
  componentDidMount() {
    if (getCachedData('movies') === null) {
      getMoviesData()
        .then((data) => {
          this.setState({ movies: formatMoviesData(data) }, () => {
            console.log(this.state.movies);
            setCachedData('movies', this.state.movies);
          });
        })
        .catch((error) => {
          console.log(
            'There was an error fetching the data... Show error Message'
          );
        });
    } else {
      this.setState({ movies: getCachedData('movies') });
      console.log('Getting Cached data.');
    }
  }

  // pass this function to be invoked from the search component.
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    const { movies, searchTerm } = this.state;
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (movies.length > 0) {
      // Show this when data is available
      return (
        <div className="streaming-movies-app container-fluid">
          <h1 className="movie-main-title">
            {' '}
            Welcome to StarWars Stream Compare
          </h1>
          <MovieSearch
            placeholder="Search Star Wars Movies"
            handleChange={this.handleChange}
          />
          <MovieList movies={filteredMovies} />
        </div>
      );
    } else {
      // Show this when no data is available
      return (
        <div className="streaming-movies-app container-fluid">
          <span className="no-data">
            Trying to load data from server - please wait.... If no data shows
            in 5 seconds refresh your browser or try again later.
          </span>
        </div>
      );
    }
  }
}

export default App;
