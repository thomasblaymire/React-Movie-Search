import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../actions';


class MovieDetail extends Component {
	renderList() {
		return this.props.movie.map((movie) => {
			console.log('hey');
			return (
				<li key={movie} className="list-group-item">{movie.results.title} </li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}


}

function mapStateToProps(state) {
	return { movie: state.movie };
	console.log(state.movie);
}

export default connect(mapStateToProps)(MovieDetail);
