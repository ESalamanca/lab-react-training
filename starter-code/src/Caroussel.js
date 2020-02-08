import React from "react";

class Caroussel extends React.Component {
  state = {
    image: 0
  };

  updateCaroussel = value => {
    let newImage;
    if (value === 1) {
      newImage = (this.state.image + 1) % this.props.img.length;
    } else {
      if (this.state.image === 0) {
        newImage = this.props.imgs.length - 1;
      } else {
        newImage = this.state.image - 1;
      }
    }
    this.setState({
      image: newImage
    });
  };

  render() {
    return (
      <div className="caroussel">
        <img src={this.props.imgs[this.state.image]} />
        <div className="buttonsCaroussel">
          <button
            onClick={() => {
              this.updateCaroussel(-1);
            }}
          >
            Left
          </button>
          <button
            onClick={() => {
              this.updateCaroussel(1);
            }}
          >
            Right
          </button>
        </div>
      </div>
    );
  }
}

export default Caroussel;
