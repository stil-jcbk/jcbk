import { useEffect } from "react";
import Project from "../components/Project/project";

export default function ProjectsSection() {
  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.scrollY;
      const projectsContainer = document.getElementById("projects-section")!;

      if (scrollTop > 100) {
        projectsContainer.style.opacity = "1";
      } else {
        projectsContainer.style.opacity = "0";
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="projects-section" className="mt-32 opacity-0 transition-opacity">
      <h2 className="mb-5 text-center text-3xl">PROJECTS</h2>
      <div
        id="projects-container"
        className="grid grid-flow-row grid-cols-1 gap-10 sm:grid-cols-2 sm:px-2 md:grid-cols-2 md:px-10 lg:grid-cols-3 xl:px-40 2xl:px-60"
      >
        <Project
          name="save.cash"
          url="https://savecash.jcbk.pl/"
          repo="savingmoney"
          imgUrl="/assets/projects/savecash.png"
          desc="Main goal of this project is to help people with saving their cash money. It provides an online balance counter and personalized saving goals. For me it made saving much easier."
          tools={["react", "ts", "css", "firebase"]}
        />
        <Project
          name="wbijam redesign"
          url="https://wbijam.jcbk.pl/"
          repo="wbijam-redesign"
          imgUrl="/assets/projects/wbijam.png"
          desc="I've redesigned a polish anime website to give it a better look. Original design can be found at: wbijam.pl"
          tools={["react", "ts", "css"]}
        />
        <Project
          name="gamehub"
          url="https://gamehub.jcbk.pl/"
          repo="gamehub"
          imgUrl="/assets/projects/gamehub.png"
          desc="I'm currently developing a website for 'GameHub,' a fictional company. The website is at its early stage with only landing page concept available. The main feature in development is seat booking, allowing users to reserve PC seats for specified durations to enjoy gaming sessions at the venue."
          tools={["react", "ts", "sass", "firebase  "]}
        />
      </div>
    </div>
  );
}
