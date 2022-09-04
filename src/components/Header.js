import React from "react";
import Nav from "./Nav";
import logo from "./img/memo.png";

const Header = () => {
  return (
    <header>
      {/* <img src={require("")} alt="" /> */}
      <img className="logo" src={logo} alt="" width={50} height={50} />
      <Nav />
    </header>
  );
};

export default Header;
