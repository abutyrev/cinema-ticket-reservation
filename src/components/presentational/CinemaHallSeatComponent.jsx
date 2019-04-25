import React from "react";

function CinemaHallSeatComponent({ placeNumber, reserved, reserve, cancel }) {
  let cardClass = "card cinema-hall-seat";
  if (reserved) {
    cardClass += " bg-warning";
  } else {
    cardClass += " bg-success";
  }

  return (
    <div className={cardClass} style={{ width: "200px", height: "200px" }}>
      <div className="card-body">
        <h5 className="card-title">Place number: {placeNumber}</h5>
        <p className="card-text">{reserved ? "reserved" : "free"}</p>
      </div>
      {!reserved ? (
        <div className="card-footer">
          <button className="btn btn-primary" onClick={reserve}>
            Reserve
          </button>
        </div>
      ) : (
        <div className="card-footer">
          <button className="btn btn-danger" onClick={cancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default CinemaHallSeatComponent;
