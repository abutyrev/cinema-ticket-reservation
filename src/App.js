import React from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

import "./App.css";

import MovieListContainer from "./components/container/MovieListContainer";
import CinemaHallContainer from "./components/container/CinemaHallContainer";

function App() {
  return (
    <div className="App container">
    <Router>
      <Route exact path="/" component={MovieListContainer}/>
      <Route path="/cinemahall/:id" component={CinemaHallContainer}></Route>
    </Router>
    </div>
  );
}

export default App;
