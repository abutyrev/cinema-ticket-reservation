import { UPDATE_MOVIE_RESERVATION } from "../actionsTypes";

const initialState = {
  movies: [
    {
      id: "1",
      name: "Billion",
      format: "2D",
      ageLimit: 12,
      price: 250,
      reservation: [
        { placeNumber: 1, reserved: false },
        { placeNumber: 2, reserved: false },
        { placeNumber: 3, reserved: false },
        { placeNumber: 4, reserved: false },
        { placeNumber: 5, reserved: false },
        { placeNumber: 6, reserved: false }
      ]
    },
    {
      id: "2",
      name: "After",
      format: "2D",
      ageLimit: 16,
      price: 300,
      reservation: [
        { placeNumber: 1, reserved: false },
        { placeNumber: 2, reserved: false },
        { placeNumber: 3, reserved: false },
        { placeNumber: 4, reserved: false },
        { placeNumber: 5, reserved: false },
        { placeNumber: 6, reserved: false }
      ]
    },
    {
      id: "3",
      name: "Hellboy",
      format: "3D",
      ageLimit: 18,
      price: 400,
      reservation: [
        { placeNumber: 1, reserved: false },
        { placeNumber: 2, reserved: false },
        { placeNumber: 3, reserved: false },
        { placeNumber: 4, reserved: false },
        { placeNumber: 5, reserved: false },
        { placeNumber: 6, reserved: false }
      ]
    }
  ]
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_MOVIE_RESERVATION: {
      const { movie } = action.payload;
      return {
        ...state,
        movies: state.movies.map(mov => {
          if (mov.id === movie.id) {
            mov.reservation = movie.reservation;
            return mov;
          }
          return mov;
        })
      };
    }
    default:
      return state;
  }
}
