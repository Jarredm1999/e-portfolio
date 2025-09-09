import React from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";

import "./App.css";

function App() {
  return (
    <div className="bg-white min-h-screen font-inter max-w-5xl w-11/12 mx-auto">
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
