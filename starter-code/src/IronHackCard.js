import React from "react";

const IronHackCard = props => {
  let styles;
  props.blue
    ? (styles = {
        backgroundColor: "#a3d2e2"
      })
    : (styles = {
        backgroundColor: "white"
      });

  return (
    <div className="id-card" style={styles}>
      <img src={props.img} />
      <div className="idcard-info">
        <p>
          <strong>First name : </strong>
          {props.firstName}
        </p>
        <p>
          <strong>Last name : </strong>
          {props.lastName}
        </p>
        <p>
          <strong>Country : </strong>
          {props.country}
        </p>
        <p>
          <strong>Type : </strong>
          {props.isStudent ? "Student" : "Teacher"}
        </p>
      </div>
    </div>
  );
};

export default IronHackCard;
