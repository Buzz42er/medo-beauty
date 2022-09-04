import "./dist/css/App.css";
import Header from "./components/Header";
import Services from "./components/Services";
import About from "./components/About";
import Landing from "./components/Landing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <hr />
      <Landing />
      <main>
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default App;
