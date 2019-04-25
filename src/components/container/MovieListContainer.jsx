import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoviesList } from "../../redux/selectors";

import MovieListComponent from "../presentational/MovieListComponent";
import MovieListItemComponent from "../presentational/MovieListItemComponent";

class MovieListContainer extends Component {

  render() {
    let moviesList = this.props.movies.map(movie => {
      return <MovieListItemComponent {...movie} handleClick={this.ticketBtnHandleClick} key={movie.id} />;
    });

    return <MovieListComponent>{moviesList}</MovieListComponent>;
  }
}

export default connect(state => ({ movies: getMoviesList(state) }))(MovieListContainer);
