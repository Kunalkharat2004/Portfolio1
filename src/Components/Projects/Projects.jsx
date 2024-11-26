import React from "react";
import ProjectCard from "./ProjectCard";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";
import project4 from "../../assets/project4.jpg";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-12 text-white ">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-4">
        <ProjectCard
          title="Personal Portfolio"
          main="This is my personal portfolio website, built using React.js and Tailwind CSS. It showcases my web development skills, projects, and my journey as a developer. The website is fully responsive and designed with a focus on user experience."
          image={project1}
        />
        <ProjectCard
          title="E-commerce Website"
          main="An e-commerce website built with React.js and integrated with a back-end API for product management. Features include a shopping cart, user authentication, and real-time product search functionality. The project also includes payment gateway integration for secure transactions."
          image={project2}
        />
        <ProjectCard
          title="Blogging Platform"
          main="A blogging website created with React.js. It allows users to write, edit, and publish blogs, with features like user authentication, comments, and social media sharing. The website is optimized for performance and SEO, leveraging React’s fast rendering."
          image={project3}
        />
        <ProjectCard
          title="Task Manager App"
          main="A simple but efficient task manager app built with React.js. This app allows users to create, edit, and delete tasks, with features like task categorization, filtering, and deadlines. The project showcases React state management, use of hooks, and local storage for data persistence."
          image={project4}
        />
      </div>
    </div>
  );
};

export default Projects;
