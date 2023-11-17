import { useEffect } from "react";
import "./navbar.css";
import Navbtn from "../Navbtn/navbtn";

export default function Navbar() {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar")!;
      const name = document.getElementById("name");

      if (name) {
        const rect = name.getBoundingClientRect();

        if (rect.bottom <= 0) {
          navbar.style.transform = "translateY(0px)";
        } else {
          navbar.style.transform = "translateY(-60px)";
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="navbar"
      className="fixed top-0 flex h-[60px] w-full translate-y-[-60px] items-center transition-transform"
    >
      <div className="ml-auto mr-6 flex flex-row gap-5">
        <Navbtn section="projects-section" name="projects" />
        <Navbtn section="aboutme-section" name="about me" />
        <Navbtn section="contact-section" name="contact" />
      </div>
    </div>
  );
}
