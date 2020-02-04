import React from "react";

class CreditCard extends React.Component {
  render() {
    let number = this.props.number
      .split("")
      .slice(-4)
      .join("");

    let type =
      this.props.type === "Visa" ? "/img/visa.png" : "/img/master-card.svg";

    let expirationDate = `Expires ${
      this.props.expirationMonth
    }/${this.props.expirationYear.toString().substr(2, 2)}`;

    let cardNumberStyle = {
      color: this.props.color
    };

    let creditCardStyle = {
      backgroundColor: this.props.bgColor
    };

    return (
      <div className="credit-card" style={creditCardStyle}>
        <img src={type} />
        <p
          className="card-number"
          style={cardNumberStyle}
        >{`•••• •••• •••• ${number}`}</p>
        <div>
          <span>{expirationDate}</span> <span>{this.props.bank}</span>
          <p className="name">{this.props.owner}</p>
        </div>
      </div>
    );
  }
}

export default CreditCard;
