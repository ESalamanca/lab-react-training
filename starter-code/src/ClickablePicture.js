import React from "react";

class ClickablePicture extends React.Component {
  state = {
    img: 0
  };

  changeImage = () => {
    this.setState({
      img: (this.state.img + 1) % 2
    });
  };

  render() {
    const imgArray = [this.props.img, this.props.imgClicked];

    return (
      <img
        className="clickable-picture"
        onClick={this.changeImage}
        src={imgArray[this.state.img]}
      />
    );
  }
}
export default ClickablePicture;
