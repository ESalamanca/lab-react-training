import React from "react";

class LikeButton extends React.Component {
  state = {
    value: 0
  };

  updateLike = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  render() {
    let colors = ["purple", "blue", "green", "yellow", "orange", "red"];

    return (
      <button
        style={{ backgroundColor: colors[this.state.value % 6] }}
        className="like-button"
        onClick={this.updateLike}
      >
        {this.state.value} Like{this.state.value > 0 ? "s" : ""}
      </button>
    );
  }
}

export default LikeButton;
