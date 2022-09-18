import React from "react";
import Landing from "./Landing";
import Services from "./Services";
import About from "./About";

const Home = (props) => {
  return (
    <div>
      <Landing />
      <main>
        <Services />
        <About />
      </main>
    </div>
  );
};

export default Home;
