import React from "react";

const Hero = () => {
  return (
    <div className="p-4 sm:p-8 lg:px-[5rem] sm:h-screen flex flex-col justify-center">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-start  gap-8 lg:gap-[10rem] justify-between">
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
  );
};

export default Hero;
