import React from "react";

const Hero = () => {
  return (
    <div className="relative p-4 sm:p-8 lg:px-[5rem] sm:h-screen flex flex-col justify-center">
      <header className="relative z-20">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center pb-16">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <a className="mr-5 cursor-pointer font-semibold">First Link</a>
            <a className="mr-5 cursor-pointer font-semibold">Second Link</a>
            <a className="mr-5 cursor-pointer font-semibold">Third Link</a>
          </nav>
          <a className="flex order-first  lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <img
              className="w-12"
              src="https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/66975597026532de9a7a460b_eventplan.svg"
              alt="nav"
            />
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="btn">Let's Start</button>
          </div>
        </div>
      </header>
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity0"
        style={{
          boxShadow:
            "inset 0 -270px 180px #1a1a19, inset 0 300px 130px #1a1a19",
          backgroundImage:
            "url('https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/669770eddbcf5f504ef99354_hero-01.jpg')",
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[10rem] justify-between">
          <div className="text-2xl sm:text-4xl lg:text-5xl font-semibold text-center lg:text-left">
            Precision planning for perfect corporate events
          </div>
          <div className="text-sm sm:text-base lg:text-md text-center lg:text-left">
            With our expert planning and seamless execution, we ensure every
            detail is perfect so that you can focus on your business goals.
          </div>
        </div>
        {/* Bottom Section */}
        <div className="mt-8 lg:mt-16 text-6xl sm:text-8xl lg:text-[14rem] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-500 to-blue-700">
          EventPlan
        </div>
      </div>
    </div>
  );
};

export default Hero;
