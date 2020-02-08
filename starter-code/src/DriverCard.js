import React from "react";
import Rating from "./Rating";

const DriverCard = props => {
  return (
    <div className="driver-card">
      <img className="driver-picture" src={props.img} />
      <div className="info">
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>{props.car.model + "-" + props.car.licensePlate}</p>
      </div>
    </div>
  );
};

export default DriverCard;
