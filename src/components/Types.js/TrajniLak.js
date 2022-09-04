import React, { useState } from "react";
import LakSizes from "./LakSizes";

const TrajniLak = () => {
  const sizes = [{ size: "Trajni Lak S" }, { size: "Trajni Lak M" }];

  const reSize = sizes.map((size) => <LakSizes {...size} key={size} />);

  return (
    <div className="sizesSection">
      <div>
        <h3>Nokti s trajnim lakom</h3>
      </div>
      <section className="service">{reSize}</section>
    </div>
  );
};

export default TrajniLak;
