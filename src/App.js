import "./index.css";
import Nav from "./components/Nav";
import React from "react";
import Body from "./components/Body";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Project";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      <div id="home">
        <Body />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
