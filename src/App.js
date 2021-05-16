import React, { Component } from 'react';

import MovieSearch from './components/movie-search/movie-search.component';
import MovieList from './components/movie-list/movie-list.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      movies: [],
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="streaming-movies-app">
        <MovieSearch />
        <MovieList />
      </div>
    );
  }
}

export default App;
