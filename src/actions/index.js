//https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher

import axios from 'axios';

export const FETCH_MOVIES = 'fetch_movies';

const ROOT_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'a02ae9c833165463b7ef033a6f9ae01e';

export function fetchMovies(term, callback) {
  const request = axios.get(`${ROOT_URL}?api_key=${API_KEY}&query=${term}`)
  .then(() => callback());

  console.log(request);


  return {
    type: FETCH_MOVIES,
    payload: request
  }
}
