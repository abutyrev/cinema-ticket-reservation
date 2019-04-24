import React, { Component } from "react";

import CinemaHallComponent from "../presentational/CinemaHallComponent";
import { connect } from "react-redux";
import { getMovieById } from "../../redux/selectors";

class CinemaHallContainer extends Component {
  constructor(props) {
    super(props);
    this.backBtnClickHandler = this.backBtnClickHandler.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
    if (!this.props.movie) this.props.history.push('/');
  }

  backBtnClickHandler() {
    this.props.history.push("/");
  }

  render() {
    return (
      <CinemaHallComponent back={this.backBtnClickHandler}>
        {this.props.match.params.id}
      </CinemaHallComponent>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        movie: getMovieById(state, ownProps.match.params.id)
    }
};

const mapDispatchToProps = {

}

// export default CinemaHallContainer;

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CinemaHallContainer)
