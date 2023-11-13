import { useEffect, useState } from "react";

export default function Hero() {
  useEffect(() => {
    const handleScroll = (event: any) => {
      let scrollTop = window.scrollY;

      //moving text
      let moveValue = scrollTop / 2;
      const firstName = document.getElementById("firstname")!;
      const lastName = document.getElementById("lastname")!;
      firstName.style.paddingRight = moveValue.toString() + "px";
      lastName.style.paddingLeft = moveValue.toString() + "px";

      //changing text
      const changedLetters = document.getElementById("changed-letters")!;
      if (moveValue <= 25) {
        changedLetters.innerText = "KU";
        changedLetters.style.opacity = (1 - (scrollTop * 2) / 100).toString();
      } else if (moveValue > 25) {
        changedLetters.style.opacity = (scrollTop / 100).toString();
        changedLetters.innerText = "CO";
      }

      //hiding the arrow
      const scrollArrow = document.getElementById("scroll-arrow")!;
      if (scrollTop > 0) {
        scrollArrow.style.opacity = "0";
      } else {
        scrollArrow.style.opacity = "1";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="name"
      className="mt-48 flex flex-col items-center justify-center overflow-hidden"
    >
      <h1
        className="flex flex-col text-6xl font-bold italic sm:text-8xl"
        id="name"
      >
        <span id="firstname">
          JA<span id="changed-letters">KU</span>B
        </span>
        <span id="lastname">KONIECZNY</span>
      </h1>
      <svg
        id="scroll-arrow"
        className="w-12 animate-bounce transition-opacity"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m18.707 12.707-1.414-1.414L13 15.586V6h-2v9.586l-4.293-4.293-1.414 1.414L12 19.414z"></path>
      </svg>
    </div>
  );
}
