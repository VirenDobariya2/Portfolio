import React from "react";
import "./ProjectsSection.css";
import Project from "../Project";



const projects = [
  {
    title: "NetFlix 🎥",
    description:
      "Crews are rotated throughout the growing season so each has experience working on the farms in Lincoln and Roxbury.In addition to doing farmwork and harvesting, all crews also work in local hunger-relief institutions like the Pine Street Inn, Revision House and Urban Farm and Rosie Place, where they help serve food cooked from the vegetables they grow. ",
    image: "./assets/Images/home.jpg",  
    techstack: ["REACT" , "HTML","MONGO", "NODEJS"],
    link: "",
    githubLink: "https://github.com/VirenDobariya2",
    sourceLink: "https://github.com/VirenDobariya2/NetFlix",
  },
  {
    title: "Foods 🍲",
    description:
      "Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies on an internet-connected device. Depending on your plan, you can also download TV shows and movies to your iOS, Android, or Windows 10 device and watch without an internet connection.",
    image: "./assets/Images/Foods.jpg",
    techstack: ["REACT" , "HTML", "CSS", "JAVASCRIPT"],
    link: "",
    githubLink: "https://github.com/VirenDobariya2",
    sourceLink: "",
  },
  {
    title: "DeshBoard",
    description:
      "Dashboards take data from different sources and aggregate it so non-technical people can more easily read and interpret it. With interactive elements, it helps anyone using the dashboard better understand certain points, explore areas of increased interest, and support more questioning to arrive at key insights or make key decisions. ",
    image: "./assets/Images/Deshboard.jpg",
    techstack:['REACT'],
    link: "",
    githubLink: "https://github.com/VirenDobariya2",
    sourceLink: "https://github.com/VirenDobariya2/Deshboard-React",
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  return (
    <section className="project-container">
      <h5>Project</h5>
      <div className="projects-section">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
