import { statement } from "@babel/template";

export const getMoviesList = store => (store && store.movies ? store.movies : []);

export const getMovieById = (store, id) => {
  if (!store.movies) return null;

  let index = store.movies.findIndex(movie => {
    return movie.id === id;
  });

  if (index === -1) return null;

  return store.movies[index];
};
