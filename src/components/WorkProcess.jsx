import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

export default function WorkProcess() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-82%"]);

  return (
    <div className="flex items-start justify-center container mx-auto bg-[#141412] ">
      <div className="text-white text-center w-1/3 pb-14 py-10 px-5 lg:sticky top-0">
        <h1 className="text-5xl font-bold capitalize">Our work process</h1>
      </div>
      <section ref={targetRef} className="relative h-auto lg:h-[2000vh] w-2/3 ">
        <div className="lg:sticky top-0 lg:flex  h-screen items-center lg:overflow-hidden">
          <motion.div
            style={{ x: window.innerWidth >= 1024 ? x : "0%" }}
            className="flex flex-col lg:flex-row scroll-smooth "
          >
            <div className="h-screen  flex flex-col justify-between text-white w-[65vw]  ">
              <div className=" w-full h-1/2 flex flex-col justify-start items-start border-b gap-6 ">
                <div className="relative pl-7">
                  <p
                    className=" text-end text-clip bg-clip-text text-transparent font-extrabold text-9xl "
                    style={{
                      backgroundImage:
                        "linear-gradient(160deg, #a388f5,#6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                    }}
                  >
                    01
                  </p>
                  <p className="text-white text-2xl font-bold absolute left-0 bottom-2 p-1 bg-[#20201b]">
                    Planning
                  </p>
                </div>
                <p className="w-2/3 text-[#aca0cf] text-lg">
                  Understand client needs and develop a detailed event plan.
                  Initial meetings with clients, defining event goals, creating
                  a proposal, and setting a timeline.
                </p>
              </div>

              <div className=" w-full h-1/2 flex flex-col justify-end items-end">
                <div className="relative pl-7">
                  <p
                    className=" text-end text-clip bg-clip-text text-transparent font-extrabold text-9xl "
                    style={{
                      backgroundImage:
                        "linear-gradient(160deg, #a388f5,#6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                    }}
                  >
                    02
                  </p>
                  <p className="text-white text-2xl font-bold absolute left-0 bottom-2 p-1 bg-[#20201b]">
                    Prepration
                  </p>
                </div>
              </div>
            </div>
            <div className="h-screen  flex flex-col items-center justify-between w-[20vw]">
              <div className="border-b h-1/2 w-full"></div>
              <div className="h-1/2 w-full"></div>
            </div>
            <div className=" h-screen  flex flex-col justify-between text-white w-[65vw]   ">
              <div className=" w-full h-1/2 flex flex-col justify-start items-start border-b gap-6 ">
                <div className="relative pl-7">
                  <p
                    className=" text-end text-clip bg-clip-text text-transparent font-extrabold text-9xl "
                    style={{
                      backgroundImage:
                        "linear-gradient(160deg, #a388f5,#6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                    }}
                  >
                    03
                  </p>
                  <p className="text-white text-2xl font-bold absolute left-0 bottom-2 p-1 bg-[#20201b]">
                    Execution
                  </p>
                </div>
                <p className="w-2/3 text-[#aca0cf] text-lg">
                  On-site management, overseeing setup and breakdown, managing
                  vendor coordination, and handling attendee logistics.
                </p>
              </div>

              <div
                className=" w-full h-1/2 flex 
            flex-col justify-end items-end"
              >
                <div className="relative pl-7">
                  <p
                    className=" text-end text-clip bg-clip-text text-transparent font-extrabold text-9xl "
                    style={{
                      backgroundImage:
                        "linear-gradient(160deg, #a388f5,#6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
                    }}
                  >
                    04
                  </p>
                  <p className="text-white text-2xl font-bold absolute left-0 bottom-2 p-1 bg-[#20201b]">
                    Evolution
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
        
    </div>
  );
}
