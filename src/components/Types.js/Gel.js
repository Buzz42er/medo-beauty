import React, { useState } from "react";
import GelSizes from "./GelSizes";

const Gel = () => {
  const [sizes, setSizes] = useState([
    { size: "Gel S" },
    { size: "Gel M" },
    { size: "Gle L" },
    { size: "Gel XL" },
  ]);
  const [nails, setNails] = useState([]);

  const reSize = sizes.map((size) => <GelSizes key={size.id} {...size} />);

  return (
    <div className="sizesSection">
      <div>
        <h3>Nokti s gelom</h3>
      </div>
      <section className="service">{reSize}</section>
    </div>
  );
};

export default Gel;
