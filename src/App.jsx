import React from "react";
import Intro from "./components/Intro";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="bg-[#222831] text-white min-h-screen font-inter">
      <div className="max-w-5xl w-11/12 mx-auto">
        <Header />
        <Intro />
        <Portfolio />
        <Certifications />
        <Timeline />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
