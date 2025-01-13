import React from "react";

const About = () => {
  return (
    <div className="p-8">
      <div className="text-center mb-8">
        <button className="px-8 py-4 text-3xl font-bold bg-blue-500 text-white rounded-lg">
          About Me
        </button>
      </div>
      <div className="text-center mb-8">
        <p className="text-xl">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology.
        </p>
      </div>
      <div className="text-center m-12">
        <h2 className="text-5xl font-bold my-6 mb-4">Skills</h2>
        <div className="grid grid-cols-4 m-4 gap-4">
          <button className="px-2 py-1 text-sm font-bold bg-blue-500 text-white rounded-lg">
            HTML
          </button>
          <button className="px-2 py-1 text-sm font-bold bg-blue-500 text-white rounded-lg">
            CSS
          </button>
          <button className="px-2 py-1 text-sm font-bold bg-blue-500 text-white rounded-lg">
            JavaScript
          </button>
          <button className="px-2 py-1 text-sm font-bold bg-blue-500 text-white rounded-lg">
            React
          </button>
          <button className="px-2 py-1 text-sm font-bold bg-blue-500 text-white rounded-lg">
            Golang
          </button>
          <button className="px-2 py-1 text-sm font-bold bg-blue-500 text-white rounded-lg">
            C
          </button>
          <button className="px-2 py-1 text-sm font-bold bg-blue-500 text-white rounded-lg">
            C++
          </button>
          <button className="px-2 py-1 text-sm font-bold bg-blue-500 text-white rounded-lg">
            SQL
          </button>
          <button className="px-2 py-1 text-sm font-bold bg-blue-500 text-white rounded-lg">
            Git
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
