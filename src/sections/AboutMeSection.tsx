const tools = {
  front: ["react", "ts", "js", "html", "css", "sass"],
  back: ["firebase", "nodejs", "express"],
  other: ["git", "github"],
};

export default function AboutMeSection() {
  return (
    <div id="aboutme-section" className="mt-32">
      <h2 className="mb-5 text-center text-3xl">ABOUT ME</h2>
      <div className="content flex justify-center gap-12 px-10">
        <img
          className="hidden aspect-[9/16] h-auto w-1/4 max-w-xs object-cover opacity-70 lg:block"
          src="/assets/other/photo.png"
          alt=""
        />
        <div className="right">
          <div className="mt-10">
            <h3 className="text-5xl">Hi! I'm Jakub</h3>
            <p className="text-justify text-lg">
              My goal is to make user-friendly websites that make life easier.
            </p>
          </div>
          <div className="tools mt-10 flex gap-10">
            <div className="front text-center">
              <span>front</span>
              {tools.front.map((tool) => (
                <img
                  className="mb-2 w-11"
                  src={`/assets/tools/${tool}.png`}
                  alt={`${tool} icon`}
                />
              ))}
            </div>
            <div className="back text-center">
              <span>back</span>
              {tools.back.map((tool) => (
                <img
                  className="mb-2 h-10 "
                  src={`/assets/tools/${tool}.png`}
                  alt={`${tool} icon`}
                />
              ))}
            </div>
            <div className="other text-center">
              <span>other</span>
              {tools.other.map((tool) => (
                <img
                  className="mb-2 h-10 "
                  src={`/assets/tools/${tool}.png`}
                  alt={`${tool} icon`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
