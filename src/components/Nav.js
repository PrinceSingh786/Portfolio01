import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-green-200 flex justify-between items-center font-bold text-xl h-16 px-8 py-10 shadow-md">
      <h1 className="text-2xl font-bold leading-loose flex items-center">
        <VscAccount size={50} />
        <span className="px-4">psjeee8@gmail.com</span>
      </h1>
      <ul className="hidden md:flex space-x-4 leading-loose">
        <li className="p-2 cursor-pointer ">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="p-2 cursor-pointer">
          <button>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </button>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-100 ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%] top-0 h-full ease-in-out duration-500 md:hidden"
        }
      >
        <h1 className="text-2xl font-bold m-4 leading-loose flex items-center">
          <VscAccount size={50} />
          <span className="px-4">psjeee8@gmail.com</span>
        </h1>
        <ul className="p-4 space-y-4 leading-loose">
          <li className="p-2 cursor-pointer border-b border-gray-300">
            <Link to="home" smooth={true} duration={500} onClick={handleNav}>
              Home
            </Link>
          </li>
          <li className="p-2 cursor-pointer border-b border-gray-300">
            <Link to="about" smooth={true} duration={500} onClick={handleNav}>
              About
            </Link>
          </li>
          <li className="p-2 cursor-pointer border-b border-gray-300">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={handleNav}
            >
              Projects
            </Link>
          </li>
          <li className="p-2 cursor-pointer border-b border-gray-300">
            <Link to="contact" smooth={true} duration={500} onClick={handleNav}>
              Contact
            </Link>
          </li>
          <li className="p-2 cursor-pointer">
            <button>
              {" "}
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
