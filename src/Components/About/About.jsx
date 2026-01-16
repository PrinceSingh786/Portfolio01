import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview1.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80 mr-12 mt-5 w-40 h-40
    sm:w-56
    md:w-72 md:h-90 
    object-cover
    rounded-xl" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  MERN developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I have  hands-on
                  experience in full-stack development using the MERN stack. I
                  have worked on projects involving authentication, real-time
                  communication, and database design. I enjoy solving
                  algorithmic problems and building efficient, user-focused
                  applications.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Problem Solver
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I have a strong foundation in Data Structures and Algorithms
                  (DSA) and actively participate in competitive programming.
                   Check out my profiles on:
                </p>
              </span>
            </div>
            
            <div className="body-container "></div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
