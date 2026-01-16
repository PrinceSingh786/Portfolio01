import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
         
A software developer passionate about backend systems, full-stack development, and problem-solving. I love turning ideas into reliable and scalable applications.
        </p>
       <a href="mailto:psjeee8@gmail.com">
  <button className="mt-5 md:md-10 text-white py-02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
    Contact Me
  </button>
</a>

      </div>
      <div className="
    w-40 h-40
    sm:w-56 sm:h-56
    md:w-72 md:h-72
    lg:w-80 lg:h-80
    object-cover
    rounded-xl
  ">
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
