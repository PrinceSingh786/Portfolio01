import React from "react";
import princeImage from "../assets/prince.jpg";
const Body = () => {
  return (
    <div className="body-container ">
      <div className="text-center p-12 m-12">
        <img
          src={princeImage} // Ensure the path to your photo is correct
          alt="Prince singh "
          className="mx-auto mb-8 rounded-full w-48 h-48 object-cover" // Adjust the width and height
        />
        <h1 className="text-4xl font-bold">HEY, I'M PRINCE SINGH</h1>
        <p className="text-xl mt-4 py-4">
          An Aspiring Web Developer eager to learn and build Websites and Web
          Applications that make a difference
        </p>
        <p className="text-xl mt-4 py-4">
          I have a strong foundation in Data Structures and Algorithms (DSA) and
          actively participate in competitive programming. Check out my profiles
          on:
        </p>
        <div className="mt-4">
          <a
            href="https://leetcode.com/u/Princesingh923/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-xl"
          >
            LeetCode
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://www.geeksforgeeks.org/user/psjeokzt/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-xl"
          >
            GeeksforGeeks
          </a>
          <span className="mx-2">|</span>
          <a
            href="https://www.codechef.com/users/psjeee8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-xl"
          >
            Codechef
          </a>
        </div>
      </div>
    </div>
  );
};

export default Body;
