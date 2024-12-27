import React from "react";

const Videos = () => {
  return (
    <section className="flex">
      <div className="w-1/4">
        <div className="flex p-8 gap-32 items-center flex-col">
          <img
            className="rounded-lg"
            src="https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/6697a2a1a3fd1bd464960103_about-01.jpg"
            alt=""
          />
          <p className="text-lg">
            We specialize in turning visions into reality. With a passion for
            perfection and a commitment to excellence, we bring your corporate
            event dreams to life with meticulous planning, innovative solutions,
            and flawless execution.
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <h1 className="text-8xl px-16 font-bold text-center">
          Visionary planning for perfect corporate events
        </h1>
      </div>
      <div className="w-1/4">
        <div className="flex p-8 flex-col items-center gap-32">
          <h1 className="text-4xl font-bold">
            500+ <br />
            <span className="text-sm font-thin">Successful events planned</span>
          </h1>
          <img
            className="rounded-lg w-64"
            src="https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/6697a2a1032bbe36fa1d3e64_about-02.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Videos;
