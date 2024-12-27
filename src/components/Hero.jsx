import React from "react";

const Hero = () => {
  return (
    <div className="p-8 px-[5rem] h-screen">
      <div className="flex items-start gap-[10rem] justify-between">
        <div className=" text-5xl font-semibold">
          Precision planning for perfect corporate events
        </div>
        <div className="text-md">
          With our expert planning and seamless execution, we ensure every
          detail is perfect so that you can focus on your business goals.
        </div>
      </div>
      <div className="text-[14rem] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-500 to-blue-700">
        EventPlan
      </div>
    </div>
  );
};

export default Hero;
