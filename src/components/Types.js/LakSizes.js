import React from "react";

const LakSizes = (props) => {
  return (
    <div>
      {props.sizes}
      <div className="imgDiv">{props.image} </div>
    </div>
  );
};

export default LakSizes;
