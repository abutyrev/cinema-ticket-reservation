import React from "react";

function CinemaHallComponent(props) {
  return (
    <div className="cinema-hall">
      <button className="btn btn-primary cinema-hall-back-btn" onClick={props.back}>
        Back
      </button>
      <div className="cinema-hall-seats">{props.children}</div>
    </div>
  );
}

export default CinemaHallComponent;
