import axios from 'axios';

const key = '1d4d405c73fa6b5e4f872b3f8c630ff6';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const fetchTrandingMovies = () => {
  return axios
    .get(`trending/movie/day?api_key=${key}`)
    .then(response => response.data.results);
};

const fetchMovieDetails = movieId => {
  return axios
    .get(`movie/${movieId}?api_key=${key}&language=en-US`)
    .then(response => response.data);
};

const fetchMovieCastDetails = movieId => {
  return axios
    .get(`movie/${movieId}/credits?api_key=${key}&language=en-US`)
    .then(response => response.data.cast);
};

const fetchMovieReviews = movieId => {
  return axios
    .get(`movie/${movieId}/reviews?api_key=${key}&language=en-US`)
    .then(response => response.data.results);
};

const fetchMovies = query => {
  return axios
    .get(`search/movie?api_key=${key}&language=en-US&query=${query}&page=1`)
    .then(response => response.data.results);
};

export default {
  fetchTrandingMovies,
  fetchMovieDetails,
  fetchMovieCastDetails,
  fetchMovieReviews,
  fetchMovies,
};
