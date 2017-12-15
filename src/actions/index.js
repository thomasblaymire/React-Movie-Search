//https://api.themoviedb.org/3/search/movie?api_key=a02ae9c833165463b7ef033a6f9ae01e&query=Jack+Reacher

import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';

const ROOT_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = 'a02ae9c833165463b7ef033a6f9ae01e';


export function fetchMovies(term) {
  // const request = axios.get(`${ROOT_URL}?api_key=${API_KEY}&query=${term}`);
  const request = axios.get('https://api.themoviedb.org/3/search/movie?api_key=a02ae9c833165463b7ef033a6f9ae01e&language=en-US&query="' + term )

  console.log('Request', request);

  return {
        type: FETCH_MOVIES,
        payload: request
    };
}
