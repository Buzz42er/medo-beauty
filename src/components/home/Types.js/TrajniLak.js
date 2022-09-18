// import React, { useState } from "react";
import LakSizes from "./LakSizes";

const TrajniLak = () => {
  const sizes = [{ size: "Trajni Lak S" }, { size: "Trajni Lak M" }];

  const reSize = sizes.map((size2) => <LakSizes {...size2} key={size2} />);

  return (
    <div className="sizesSection">
      <div>
        <h3>Trajni Lak</h3>
      </div>
      <section className="service">{reSize}</section>
    </div>
  );
};

export default TrajniLak;
