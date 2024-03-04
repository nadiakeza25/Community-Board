import React from "react";
const Event = (props) => {
    return (
      <td className="card">
        <p> {props.location} </p>
        <h1> {props.description} </h1>
        <p> {props.event} </p>
      </td>
    );
};

export default Event;