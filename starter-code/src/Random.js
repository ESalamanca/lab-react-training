import React from "react";

class Random extends React.Component {
  render() {
    const min = this.props.min;
    const max = this.props.max;
    const randomNumber = Math.floor(Math.random() * (max + 1) + min);

    return (
      <p className="random">
        {`Random number between ${this.props.min} and ${this.props.max} => ${randomNumber}`}
      </p>
    );
  }
}

export default Random;
