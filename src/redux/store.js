import { createStore } from 'redux';
import moviesReducer from './reducers/movies';

export default createStore(moviesReducer);