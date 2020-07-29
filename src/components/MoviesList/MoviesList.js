import React from 'react';
import MovieItem from './MovieItem';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      <MovieItem movies={movies} />
    </ul>
  );
};

export default MoviesList;
