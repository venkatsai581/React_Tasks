import React from "react";

function Child(props) {
  return (
    <div className="card">
      <h2>{props.name}</h2>

      <p>
        <strong>Age:</strong> {props.age}
      </p>

      <p>
        <strong>Role:</strong> {props.role}
      </p>

      <p>
        <strong>Location:</strong> {props.location}
      </p>

      <p>
        <strong>Skills:</strong> {props.skills}
      </p>
    </div>
  );
}

export default Child;