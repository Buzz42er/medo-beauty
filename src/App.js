import "./dist/css/App.css";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Footer from "./components/Footer";
import About from "./components/home/About";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="HeaderDiv">
          <Header />
          <hr />
        </div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
