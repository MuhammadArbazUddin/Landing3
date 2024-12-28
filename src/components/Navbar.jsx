import React from "react";

const Navbar = () => {
  return (
    <header>
      <h1></h1>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center py-8">
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
  );
};

export default Navbar;
