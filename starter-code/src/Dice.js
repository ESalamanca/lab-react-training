import React from "react";

class Dice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  updateDice = () => {
    this.setState({
      number: 0
    });

    setTimeout(() => {
      this.setState({
        number: Math.floor(Math.random() * 6 + 1)
      });
    }, 1000);
  };

  render() {
    let dices = [
      "/img/dice-empty.png",
      "/img/dice1.png",
      "/img/dice2.png",
      "/img/dice3.png",
      "/img/dice4.png",
      "/img/dice5.png",
      "/img/dice6.png"
    ];
    return (
      <img
        className="dice"
        onClick={this.updateDice}
        src={dices[this.state.number]}
      />
    );
  }
}

export default Dice;
