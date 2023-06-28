import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar/navbar";
import Title from "./components/Title/title";
import ProjectsSection from "./sections/ProjectsSection";
import AboutMeSection from "./sections/AboutMeSection";

function App() {
  return (
    <div className="App font-work-sans">
      <header>
        <Navbar />
      </header>
      <Title />
      <ProjectsSection />
      <AboutMeSection />
    </div>
  );
}

export default App;
