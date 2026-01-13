import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <div className="mt-4 text-black un">
          <a
            href="https://leetcode.com/u/Princesingh923/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            <b>LeetCode</b>
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://www.geeksforgeeks.org/user/psjeokzt/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            <b>GeeksforGeeks</b>
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://www.codechef.com/users/prince_mmm"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            <b>Codechef</b>
          </a>
        </div>
      </ul>
    </div>
  );
};

export default Footer;
