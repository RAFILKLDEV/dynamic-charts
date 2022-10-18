import React from "react";

const Charts = (props) => {
  return (
    <div className="Chart">
      <img
        src={props.url}
        alt="Monster"
      />
      <div className="Chart-info">
        <div>{props.name}</div>
        <div>{props.tag}</div>
        <div>{`R$ ${props.price}`}</div>
      </div>
    </div>
  );
};

export default Charts;
