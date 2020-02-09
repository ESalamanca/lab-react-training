import React from "react";

const NumbersTable = props => {
  let table = [];
  for (let i = 0; i < props.limit; i++) {
    (i + 1) % 2 === 0
      ? table.push(
          <div key={i} className="table-box even">
            {i + 1}
          </div>
        )
      : table.push(
          <div key={i} className="table-box odd">
            {i + 1}
          </div>
        );
  }

  return <div className="numbers-table">{table}</div>;
};

export default NumbersTable;
