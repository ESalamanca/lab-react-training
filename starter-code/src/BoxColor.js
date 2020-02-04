import React from "react";

class Random extends React.Component {
  render() {
    function toHex(rgb) {
      if (rgb.toString(16) === "0") {
        return "00";
      } else {
        return rgb.toString(16);
      }
    }
    const rgb = `rgb(${this.props.r},${this.props.g},${this.props.b})`;
    let hexValue = `#${toHex(this.props.r)}${toHex(this.props.g)}${toHex(
      this.props.b
    )}`;

    const divStyle = {
      backgroundColor: rgb,
      height: "14vh",
      textAlign: "center",
      verticalAlign: "center",
      marginTop: "2px",
      border: "1px solid black"
    };

    return (
      <div style={divStyle}>
        {" "}
        {rgb} <br></br> {hexValue}
      </div>
    );
  }
}

export default Random;
