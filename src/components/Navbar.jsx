import React from "react";

const Navbar = () => {
  return (
    <header className="z-20 sm:absolute top-0 left-0 w-full">
      <div className="px-[5rem] flex flex-wrap p-5 flex-col md:flex-row items-center pb-16">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 cursor-pointer font-semibold">First Link</a>

          <a className="mr-5 cursor-pointer font-semibold">Second Link</a>

          <a className="mr-5 cursor-pointer font-semibold">Third Link</a>
        </nav>

        <a
          href="/"
          className="flex cursor-pointer order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
        >
          <span className="w-14 h-14 text-black text-center font-bold pt-4 bg-white rounded-full">
            SW
          </span>
        </a>

        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <button
            className="relative p-[2px] rounded-md"
            style={{
              background:
                "linear-gradient(160deg, #a388f5, #6ae8ff 22%, #fff694 52%, #fc67ff 83%)",
            }}
          >
            <span
              className="block bg-[#1B1B1A] px-4 py-2 rounded-md"
              style={{
                backgroundClip: "padding-box",
              }}
            >
              Let's Start
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
