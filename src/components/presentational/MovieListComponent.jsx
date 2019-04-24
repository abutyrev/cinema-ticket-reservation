import React from "react";

function MovieListComponent(props) {
  return (
    <table className="table table-striped table-bordered">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Film</th>
          <th scope="col">Format</th>
          <th scope="col">Age limit</th>
          <th scope="col">Price</th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default MovieListComponent;
