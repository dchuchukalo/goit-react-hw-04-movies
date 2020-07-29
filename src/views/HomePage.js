import React, { Component } from 'react';
import imagesApi from '../services/images-api';
import MoviesList from '../components/MoviesList';

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    const movies = await imagesApi.fetchTrandingMovies();

    this.setState({ movies });
  }

  render() {
    const { movies } = this.state;

    return (
      <>
        <h1>Trending today</h1>

        <MoviesList movies={movies} />
      </>
    );
  }
}

export default HomePage;
