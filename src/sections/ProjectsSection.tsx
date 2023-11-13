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

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div id="projects-section" className="mt-32 opacity-0 transition-opacity">
      <h2 className="mb-5 text-center text-3xl">PROJECTS</h2>
      <div
        id="projects-container"
        className="grid grid-flow-row grid-cols-1 gap-10 sm:grid-cols-2 sm:px-2 md:grid-cols-2 md:px-10 lg:grid-cols-3 xl:px-40 2xl:px-60"
      >
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}