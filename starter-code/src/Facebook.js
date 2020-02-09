import React from "react";
import IronHackCard from "./IronHackCard";
import profiles from "./data/berlin.json";

profiles.map(el => {
  el.blue = false;
  return el;
});

console.log(profiles);

class Facebook extends React.Component {
  state = {
    people: profiles,
    selectedCountry: ""
  };
  toggleBlue = country => {
    profiles.map(item => {
      if (item.country === country) {
        item.blue = true;
        return item;
      } else {
        item.blue = false;
        return item;
      }
    });

    this.setState({
      people: profiles,
      selectedCountry: country
    });
  };

  render() {
    return (
      <div className="facebook">
        <div className="buttons">
          <button
            onClick={() => {
              this.toggleBlue("");
            }}
          >
            All
          </button>
          {profiles
            .map(item => item.country)
            .filter((value, index, self) => self.indexOf(value) === index)
            .map(el => {
              let cl = "";
              el === this.state.selectedCountry
                ? (cl = "blue-facebook")
                : (cl = "");

              return (
                <button
                  className={cl}
                  key={el}
                  onClick={() => {
                    this.toggleBlue(el);
                  }}
                >
                  {el}
                </button>
              );
            })}
        </div>
        {this.state.people.map(item => {
          return <IronHackCard key={item.img} {...item} />;
        })}
      </div>
    );
  }
}

export default Facebook;
