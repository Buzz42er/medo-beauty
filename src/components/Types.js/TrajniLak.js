import React, { useState } from "react";
import LakSizes from "./LakSizes";

const TrajniLak = () => {
  const [sizes, setSizes] = useState(["Trajni Lak S", "Trajni Lak M"]);

  const reSize = sizes.map((size) => <h4>{size}</h4>);

  return (
    <div className="">
      <h3>Nokti s trajnim lakom</h3>
      <section className="service">
        <LakSizes sizes={reSize} image={reSize} />
      </section>
    </div>
  );
};

export default TrajniLak;
