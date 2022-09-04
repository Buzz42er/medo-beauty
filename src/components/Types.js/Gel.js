import React, { useState } from "react";
import GelSizes from "./GelSizes";

const Gel = () => {
  const [sizes, setSizes] = useState(["Gel S", "Gel M", "Gle L", "Gel XL"]);
  const [nails, setNails] = useState([]);

  const reSize = sizes.map((size) => <h4>{size}</h4>);
  const image = sizes.map((img) => <div className="imgDiv">{img}</div>);

  return (
    <div className="">
      <h3>Nokti s gelom</h3>
      <section className="service">
        <GelSizes size={reSize} image={image} />
      </section>
    </div>
  );
};

export default Gel;
