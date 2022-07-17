import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-3xl text-white">Hello,</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          I am Prakhar Singh
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          Welcome to my portfolio.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          Here you can find information about me, my education and my projects.
        </p>
        {/* <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            Contact
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
