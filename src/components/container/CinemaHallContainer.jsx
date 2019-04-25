import React, { Component } from "react";
import { connect } from "react-redux";

import CinemaHallComponent from "../presentational/CinemaHallComponent";
import CinemaHallSeatComponent from "../presentational/CinemaHallSeatComponent";

import { getMovieById, getMoviesList } from "../../redux/selectors";
import { updateMovieReservation } from "../../redux/actions";

class CinemaHallContainer extends Component {
  constructor(props) {
    super(props);
    this.backBtnClickHandler = this.backBtnClickHandler.bind(this);
    this.reserveBtnClickHandler = this.reserveBtnClickHandler.bind(this);
    this.cancelBtnClickHandler = this.cancelBtnClickHandler.bind(this);
  }

  componentWillMount() {
    if (!this.props.movie)
      this.props.history.push("/");
  }

  backBtnClickHandler() {
    this.props.history.push("/");
  }

  reserveBtnClickHandler(index) {
    if (this.props.movie.reservation[index].reserved) return;
    let movie = Object.assign({}, this.props.movie);
    movie.reservation[index].reserved = true;
    this.props.updateMovieReservation(movie);
  }

  cancelBtnClickHandler(index) {
    if (!this.props.movie.reservation[index].reserved) return;
    let movie = Object.assign({}, this.props.movie);
    movie.reservation[index].reserved = false;
    this.props.updateMovieReservation(movie);
  }

  render() {
    if (!this.props.movie) return null;
    let seats = this.props.movie.reservation.map((seat, index) => {
      return (
        <CinemaHallSeatComponent
          key={seat.placeNumber}
          reserve={() => this.reserveBtnClickHandler(index)}
          cancel={() => this.cancelBtnClickHandler(index)}
          {...seat}
        />
      );
    });
    return <CinemaHallComponent back={this.backBtnClickHandler}>{seats}</CinemaHallComponent>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    movies: getMoviesList(state),
    movie: getMovieById(state, ownProps.match.params.id)
  };
};

const mapDispatchToProps = {
  updateMovieReservation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CinemaHallContainer);
