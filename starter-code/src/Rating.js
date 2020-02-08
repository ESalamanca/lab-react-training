import React from "react";

const Ratings = props => {
  // let star = "/img/star.svg";
  // let emptyStar = "/img/empty-star.svg";
  let listStars = [];
  for (let i = 0; i < 5; i++) {
    if (i >= Math.round(props.children)) {
      listStars.push(<img src="/img/empty-star.svg" />);
    } else {
      listStars.push(<img src="/img/star.svg" />);
    }
  }
  console.log(listStars);

  return <div className="Ratings">{listStars}</div>;
};

export default Ratings;
