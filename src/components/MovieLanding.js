import React, {Component} from 'react';
import SearchBar from '../containers/SearchBar';
import MovieDetail from '../containers/MovieDetail';

class MovieLanding extends Component {
  render() {
    return (
        <div>
          <h3>Movie Landing</h3>
          <SearchBar />
          <MovieDetail />

        </div>
    );
  }
}

export default MovieLanding;
