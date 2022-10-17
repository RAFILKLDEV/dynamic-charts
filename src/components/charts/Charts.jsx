import React from "react";

const Charts = (props) => {
  return (
    <div className="Chart">
      <img src="https://marvel-b1-cdn.bc0a.com/f00000000104050/www.monsterenergy.com/media/uploads_image/2016/06/22/auto/800/7dd2cc96f5c8ee7c1658e8f88d362a5a.png?mod=v1_c863764535e9284ff34f366929dbf8ab" />
      <div className="Chart-info">
        <div>{props.name}</div>
        <div>{props.tag}</div>
        <div>{props.price}</div>
      </div>
    </div>
  );
};

export default Charts;
