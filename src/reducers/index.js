import { combineReducers } from 'redux';
import MovieReducer from './ReducerMovies';

const rootReducer = combineReducers({
  movie: MovieReducer
});

export default rootReducer;
