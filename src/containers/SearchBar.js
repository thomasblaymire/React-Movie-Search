import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

	}

  onInputChange(event) {
		this.setState({ term: event.target.value })
	}

  onFormSubmit(term) {
    event.preventDefault();
    this.props.fetchMovies(this.state.term);
  }

	render() {
		return (
			<form onSubmit={this.onFormSubmit} className="input-group">

				<input
					placeholder="Search for a movie"
					className="form-control"
					onChange={this.onInputChange} />

				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">
						Search
					</button>
				</span>

			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchMovies}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
