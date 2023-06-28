type props = {
  section: string;
  name: string;
};

export default function Navbtn(props: props) {
  return (
    <button
      className="text-white transition-transform hover:-translate-y-0.5"
      onClick={() => {
        const projectsSectionRect = document
          .getElementById(props.section)
          ?.getBoundingClientRect();

        if (projectsSectionRect) {
          window.scrollTo({
            top: projectsSectionRect.top + window.pageYOffset - 100,
            behavior: "smooth",
          });
        }
      }}
    >
      {props.name}
    </button>
  );
}
