import React from "react";

class Greetings extends React.Component {
  render() {
    const greets = {
      de: "Hallo",
      en: "Hello",
      es: "Hola",
      fr: "Bonjour"
    };

    return (
      <p className="greetings">
        {greets[this.props.lang] + " " + this.props.children}
      </p>
    );
  }
}

export default Greetings;
