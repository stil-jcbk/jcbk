import { useEffect } from "react";
import "./navbar.css";

function Navbar() {
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

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      id="navbar"
      className="fixed top-0 flex h-[60px] w-full translate-y-[-60px] items-center transition-transform"
    >
      <button
        className="ml-auto mr-6 text-white hover:-translate-y-0.5 transition-transform"
        onClick={() => {
          const projectsSectionRect = document
            .getElementById("projects-section")
            ?.getBoundingClientRect();

          if (projectsSectionRect) {
            window.scrollTo({
              top: projectsSectionRect.top + window.pageYOffset - 100,
              behavior: "smooth",
            });
          }
        }}
      >
        projects
      </button>
    </div>
  );
}

export default Navbar;
