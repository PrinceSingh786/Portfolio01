import React from "react";
import project1Image from "../assets/project1.jpeg";
import { FaGithub, FaExternalLink } from "react-icons/fa";

const projects = [
  {
    title: "Quick-Chat",
    description:
      "A real-time chat app built using Socket.io with JWT authentication. Responsive and fast.",
    imageUrl: project1Image,
    repo: "https://github.com/PrinceSingh786/quick-chat",
    demo: "#"
  },
  {
    title: "Forever (E-commerce)",
    description:
      "Full-stack e-commerce with user auth, product filtering, and payment workflow. Built with MERN stack and Tailwind CSS.",
    imageUrl: project1Image,
    repo: "https://github.com/PrinceSingh786/forever",
    demo: "#"
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing projects, skills and contact details. Built with React and Tailwind CSS.",
    imageUrl: project1Image,
    repo: "https://github.com/PrinceSingh786/Portfolio01",
    demo: "#"
  }
];

const Project = () => {
  return (
    <section id="projects" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center my-8">
          <h1 className="text-4xl md:text-5xl font-bold">Projects</h1>
          <p className="text-lg mt-4 text-gray-600">Selected projects with links to source and demos.</p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex items-center space-x-3">
                  {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 bg-gray-100 rounded-md text-sm hover:bg-gray-200">
                      <FaGithub className="mr-2" /> Source
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-3 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                      <FaExternalLink className="mr-2" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
