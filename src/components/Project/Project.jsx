import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import "./Project.css";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { RiJavascriptFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Project = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const techtext = {
    HTML: <FaHtml5 color=' #ee6a0d' />,
    CSS: <DiCss3  color="#264de4"/>,
    REACT: <FaReact  color="#5b42f3"/>,
    JAVASCRIPT: <RiJavascriptFill color="#FFFF00"/>,
    MONGO: <SiMongodb color="#008000"/>,
    NODEJS:<FaNodeJs color="#215732"/>
  }



  return (
    <div
      className={`project-card ${isHovered ? "hovered" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3 className="title">{project.title}</h3>

        <div className="project-description">
          <h3>Description</h3>
          <p>{project.description}</p>
        </div>

        <div className="project-language">
          <h3>language</h3>
          <div className="project-icon">
            {Array.isArray(project.techstack) && project.techstack.map((tech) =>
              techtext[tech] ? (
                <div key={tech} className="project-icons">
                  {techtext[tech]}
                </div>
              ) : null
            )}
          </div>
        </div>

        <div className="project-buttons">
          <button
            className="project-button"
            onClick={() => handleClick(project.githubLink)}
          >
            <FaGithub style={{ fontSize: "15px" }} />
            {/* <div className="text">GitHub</div> */}
          </button>
          <button
            className="project-button-btn"
            onClick={() => handleClick(project.sourceLink)}
          >
            <FaCode style={{ fontSize: "20px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
