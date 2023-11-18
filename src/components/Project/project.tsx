import "./style.css";
import React, { useState } from "react";

const useOpenState: () => [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>,
  HTMLElement | null,
  React.Dispatch<React.SetStateAction<HTMLElement | null>>
] = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  const [element, setElement] = useState<HTMLElement | null>(null);

  if (clicked && element) {
    let htmlElement = document.getElementsByTagName("html")[0];
    let bodyElement = document.getElementsByTagName("body")[0];

    element.classList.add("open");
    htmlElement.style.overflow = "hidden";
    bodyElement.style.overflow = "hidden";
  } else if (!clicked && element) {
    let htmlElement = document.getElementsByTagName("html")[0];
    let bodyElement = document.getElementsByTagName("body")[0];

    element.classList.remove("open");
    htmlElement.style.overflow = "unset";
    bodyElement.style.overflow = "unset";
  }

  return [clicked, setClicked, element, setElement];
};

type ProjectProps = {
  name: string;
  url: string;
  repo: string;
  imgUrl: string;
  desc: string;
  tools: string[];
};

export default function Project(props: ProjectProps) {
  const [clicked, setClicked, element, setElement] = useOpenState();

  const handleClick = (type: "show" | "hide", e?: React.MouseEvent) => {
    if (type === "show") {
      if (e) {
        setElement(e.currentTarget as HTMLDivElement);
        setClicked(true);
      }
    }
    if (type === "hide") {
      setClicked(false);
    }
  };

  return (
    <>
      {clicked ? (
        <ProjectScreen
          name={props.name}
          url={props.url}
          repo={props.repo}
          imgUrl={props.imgUrl}
          desc={props.desc}
          tools={props.tools}
          handleClick={handleClick}
        />
      ) : (
        <></>
      )}
      <div className="placeholder m-auto h-96 w-72 rounded-3xl bg-black">
        <div
          onClick={(e) => {
            handleClick("show", e);
          }}
          className="project h-full w-full cursor-pointer rounded-3xl border-[2px] border-black"
        >
          <img
            src={props.imgUrl}
            alt=""
            className="h-full w-full rounded-3xl object-cover object-left-top"
          />
        </div>
      </div>
    </>
  );
}

type ProjectScreenProps = {
  handleClick: Function;
};

function ProjectScreen(props: ProjectScreenProps & ProjectProps) {
  let repo = `https://github.com/stil-jcbk/${props.repo}`;

  return (
    <div className="project-screen-container fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-black bg-opacity-60">
      <div className="project-screen h-[80vh] w-[80vw] rounded-3xl border-2 border-black">
        <span
          onClick={() => {
            props.handleClick("hide");
          }}
          className="close-btn absolute right-0 top-0 m-4 w-[40px] cursor-pointer select-none text-center font-work-sans text-4xl font-bold"
        >
          x
        </span>
        <div className="flex h-full w-full">
          <img
            className="aspect-[9/16] h-full scale-95 rounded-3xl object-cover object-left-top"
            src={props.imgUrl}
            alt=""
          />
          <div className="ml-10 mr-10 flex max-w-3xl flex-col justify-center">
            <div className="name mb-4">
              <h2 className="text-4xl font-extrabold">{props.name}</h2>
              <a
                href={props.url}
                target="_blank"
                rel="noreferrer"
                className="url text opacity-60"
              >
                {props.url}
              </a>
            </div>
            <p className="desc text-lg">{props.desc}</p>
            <div className="tools mt-4 flex w-max gap-6 rounded-3xl bg-black bg-opacity-30 p-4">
              {props.tools.map((tool) => (
                <img
                  key="tool"
                  className="tool-icon h-10"
                  src={`/assets/tools/${tool}.svg`}
                  alt=""
                />
              ))}
            </div>
            <a
              className="mt-8 underline"
              target="_blank"
              rel="noreferrer"
              href={repo}
            >
              github repository
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
