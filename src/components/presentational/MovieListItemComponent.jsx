import React from "react";
import { Link } from "react-router-dom";

function MovieListItemComponent({ id, name, format, ageLimit, price }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{format}</td>
      <td>{ageLimit}+</td>
      <td>{price}</td>
      <td>
        <Link to={`/cinemahall/${id}`} className="btn btn-primary">
          Tickets
        </Link>
      </td>
    </tr>
  );
}

export default MovieListItemComponent;
