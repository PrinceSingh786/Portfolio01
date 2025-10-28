import React from "react";
import project1Image from "../assets/project1.jpeg";

const projects = [
  {
    title: "Project 1",
    description:
      "This is a description of Project 1. It includes details about the project and its case study.",
    imageUrl: project1Image,
  },
  {
    title: "Project 2",
    description:
      "This is a description of Project 2. It includes details about the project and its case study.",
    imageUrl: project1Image,
  },
  {
    title: "Project 3",
    description:
      "This is a description of Project 3. It includes details about the project and its case study.",
    imageUrl: project1Image,
  },
  {
    title: "Project 4",
    description:
      "This is a description of Project 4. It includes details about the project and its case study.",
    imageUrl: project1Image,
  },
  // Add more projects as needed
];

const Project = () => {
  return (
    <div className="p-8">
      <div className="text-center my-12 mb-8">
        <h1 className="text-5xl font-bold my-8">PROJECTS</h1>
        <p className="text-xl mt-4">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own case study.
        </p>
      </div>
      <div className="space-y-8 my-32">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col py-16 md:flex-row items-center md:items-start"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full md:w-1/3 h-auto mb-4 md:mb-0 md:mr-8 rounded-lg object-cover"
            />
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-2">{project.title}</h2>
              <p className="text-lg">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
