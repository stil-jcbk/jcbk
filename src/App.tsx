import React from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Title/title";
import ProjectsSection from "./sections/ProjectsSection";
import AboutMeSection from "./sections/AboutMeSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App font-work-sans">
      <header>
        <Navbar />
      </header>
      <Hero />
      <ProjectsSection />
      <AboutMeSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
