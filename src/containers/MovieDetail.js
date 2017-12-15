import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../actions';


class MovieDetail extends Component {

	renderMovie(movieData) {

		console.log('Data is ' + movieData.total_pages);

		return (
			<ul key={movieData.total_pages}>
				<li>{movieData.total_pages}</li>
			</ul>
		)
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.props.movie.map(this.renderMovie)}
			</ul>
		);
	}


}

function mapStateToProps({ movie }) {
	return { movie }; // { movie } === { movie: movie }
}

export default connect(mapStateToProps)(MovieDetail);
