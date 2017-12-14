import React, { Component } from "react";
import { connect } from 'react-redux';

class MovieDetail extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
		<div> {this.props.movie}</div>
		);
	}


}

function mapStateToProps(state) {
	return { movie: state.movie };
}

export default connect(mapStateToProps)(MovieDetail);
