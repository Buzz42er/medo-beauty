import React from "react";

const LakSizes = (props) => {
  return (
    <div>
      <div className="sizesHeadings">
        <h4>{props.size}</h4>
      </div>
      <div className="nailsExamples">
        <div className="imgDiv">{props.img}</div>
      </div>
    </div>
  );
};

export default LakSizes;
