import React from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div className="bg-[#222831] text-[#DFD0B8] min-h-screen font-inter">
      <div className="max-w-5xl w-11/12 mx-auto">
        <Intro />
        <Portfolio />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
