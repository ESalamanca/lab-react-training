import React from "react";

const Ratings = props => {
  let listStars = [];
  for (let i = 0; i < 5; i++) {
    if (i >= Math.round(props.children)) {
      listStars.push(<img key={i} src="/img/empty-star.svg" />);
    } else {
      listStars.push(<img key={i} src="/img/star.svg" />);
    }
  }

  return <div className="Ratings">{listStars}</div>;
};

export default Ratings;
