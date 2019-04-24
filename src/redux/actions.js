import { UPDATE_MOVIE_RESERVATION } from "./actionsTypes";

export const updateMovieReservation = movie => ({
  type: UPDATE_MOVIE_RESERVATION,
  payload: {
    movie
  }
});
