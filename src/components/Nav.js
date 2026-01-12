import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <VscAccount size={36} />
          <div className="ml-3">
            <h2 className="font-bold text-lg">Prince Singh</h2>
            <a href="mailto:psjeee8@gmail.com" className="text-sm text-gray-600">psjeee8@gmail.com</a>
          </div>
        </div>
        <ul className="hidden md:flex items-center space-x-6">
          <li><Link to="home" smooth={true} duration={500} className="cursor-pointer">Home</Link></li>
          <li><Link to="about" smooth={true} duration={500} className="cursor-pointer">About</Link></li>
          <li><Link to="projects" smooth={true} duration={500} className="cursor-pointer">Projects</Link></li>
          <li><Link to="contact" smooth={true} duration={500} className="cursor-pointer">Contact</Link></li>
          <li><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-md">Resume</a></li>
          <li><a href="https://github.com/PrinceSingh786" target="_blank" rel="noopener noreferrer" className="text-gray-700"><FaGithub size={20}/></a></li>
        </ul>
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      <div className={nav ? "md:hidden fixed left-0 top-0 w-[70%] h-full bg-white shadow-lg ease-in-out duration-300" : "md:hidden fixed left-[-100%] top-0 h-full ease-in-out duration-300"}>
        <div className="p-6">
          <div className="flex items-center mb-6">
            <VscAccount size={36} />
            <div className="ml-3">
              <h2 className="font-bold">Prince Singh</h2>
              <a href="mailto:psjeee8@gmail.com" className="text-sm text-gray-600">psjeee8@gmail.com</a>
            </div>
          </div>
          <ul className="space-y-4">
            <li><Link to="home" smooth={true} duration={500} onClick={handleNav}>Home</Link></li>
            <li><Link to="about" smooth={true} duration={500} onClick={handleNav}>About</Link></li>
            <li><Link to="projects" smooth={true} duration={500} onClick={handleNav}>Projects</Link></li>
            <li><Link to="contact" smooth={true} duration={500} onClick={handleNav}>Contact</Link></li>
            <li><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" onClick={handleNav}>Resume</a></li>
            <li><a href="https://github.com/PrinceSingh786" target="_blank" rel="noopener noreferrer" onClick={handleNav}>GitHub</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
