import React from "react";
import ProjectCard from "./ProjectCard";
import ecomimage from "../../assets/ecommerce.img.png"
import portimage from "../../assets/portfolio.img.png";
import chatimage from "../../assets/chatapp.img.png";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        <ProjectCard
          title="Portfolio Website"
          main="A personal portfolio website showcasing my projects, skills, and experience in a clean layout.
Designed to highlight my technical skills, projects, and provide easy ways for recruiters to contact me."
          live="https://portfolio01-beta.vercel.app/"
          imageId={portimage}
          code="https://github.com/PrinceSingh786/Portfolio01"
        />

        <ProjectCard
          title="Quick-Chat"
          main="A real-time chat application that enables users to communicate instantly with secure authentication.
Built to understand real-time communication, backend APIs, and user session management."
          live="https://chat-app-blond-alpha-25.vercel.app/"
          code="https://github.com/PrinceSingh786/chat-app"
          imageId={chatimage}
        />
        <ProjectCard
          title="E commerce"
          main="An online shopping platform with product listing, cart management, and user authentication features.
Focused on building scalable backend logic, database design, and a smooth user experience."
          live="https://ecommerce-frontend-latest-part.vercel.app/"
          code="https://github.com/PrinceSingh786/E-commerce-website"
          imageId={ecomimage}
        />
      </div>
    </div>
  );
};

export default Projects;
