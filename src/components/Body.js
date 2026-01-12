import React from "react";
import { Link } from "react-scroll";
import princeImage from "../assets/prince.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Body = () => {
  return (
    <section id="home" className="bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-16 md:flex md:items-center md:justify-between">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Hi, I'm Prince Singh</h1>
          <p className="text-lg text-gray-700 mb-6">I'm a Web Developer building accessible and responsive web applications. Strong in DSA and competitive programming.</p>
          <div className="flex space-x-4">
            <Link to="projects" smooth={true} duration={500} className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 cursor-pointer">View Projects</Link>
            <Link to="contact" smooth={true} duration={500} className="inline-block border border-gray-300 px-5 py-2 rounded-md hover:bg-gray-100 cursor-pointer">Contact</Link>
          </div>
          <div className="mt-6 flex space-x-4">
            <a href="https://github.com/PrinceSingh786" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black"><FaGithub size={24} /></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700"><FaLinkedin size={24} /></a>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img src={princeImage} alt="Prince Singh" className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Body;
