import React from "react";

const Videos = () => {
  return (
    <section className="px-4  flex flex-col lg:flex-row items-center lg:items-stretch bg-[#1A1A19]  py-10">
      {/* Left Section */}
      <div className="lg:w-1/4 p-4">
        <div className="flex flex-col items-center gap-16">
          <img
            className="rounded-lg w-full max-w-xs opacity-50"
            src="https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/6697a2a1a3fd1bd464960103_about-01.jpg"
            alt=""
          />
          <p className="text-[#aca0cf] text-sm sm:text-lg text-center lg:text-left">
            We specialize in turning visions into reality. With a passion for
            perfection and a commitment to excellence, we bring your corporate
            event dreams to life with meticulous planning, innovative solutions,
            and flawless execution.
          </p>
        </div>
      </div>
      {/* Middle Section */}
      <div className="lg:w-1/2 p-4">
        <h1 className="text-[#f3efff] text-3xl sm:text-5xl lg:text-8xl font-bold text-center px-4">
          Visionary planning for perfect corporate events
        </h1>
      </div>
      {/* Right Section */}
      <div className="lg:w-1/4 p-4">
        <div className="flex flex-col items-center gap-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            500+ <br />
            <span className="text-sm sm:text-base font-thin text-[#aca0cf]">
              Successful events planned
            </span>
          </h1>
          <img
            className="rounded-lg w-full max-w-xs opacity-50"
            src="https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/6697a2a1032bbe36fa1d3e64_about-02.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Videos;
