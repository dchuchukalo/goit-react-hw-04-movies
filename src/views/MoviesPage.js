import React, { Component } from 'react';
import queryString from 'query-string';

import imagesApi from '../services/images-api';

import MoviesList from '../components/MoviesList';
import SearchBar from '../components/SearchBar';

class MoviesPage extends Component {
  state = {
    movies: null,
    inputValue: '',
  };

  componentDidMount() {
    const query = this.getCategoryQueryProps(this.props);

    if (query) {
      this.fetchMovies(query);
      this.setState({
        inputValue: query,
      });
    }
  }

  componentDidUpdate(prevProps) {
    const prevCategory = this.getCategoryQueryProps(prevProps);
    const nextCategory = this.getCategoryQueryProps(this.props);

    if (prevCategory !== nextCategory) {
      if (!nextCategory) {
        this.setState({ movies: null, inputValue: '' });
        return;
      }
      this.fetchMovies(nextCategory);
    }
  }

  onSubmitSearch = inputValue => {
    if (inputValue) {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `query=${inputValue}`,
      });
    }
  };

  fetchMovies = async query => {
    const movies = await imagesApi.fetchMovies(query);
    this.setState({
      movies,
    });
  };

  getCategoryQueryProps = props =>
    queryString.parse(props.location.search).query;

  render() {
    const { movies, inputValue } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.onSubmitSearch} inputValue={inputValue} />
        {movies &&
          (movies.length > 0 ? (
            <MoviesList movies={movies} />
          ) : (
            <p>No movies matching the request.</p>
          ))}
      </>
    );
  }
}

export default MoviesPage;
