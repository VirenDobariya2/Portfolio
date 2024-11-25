import "./App.css";
import ContactMe from "./components/ContactMe/ContactMe";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import ProjectsSection from "./components/Project/ProjectsSection/ProjectSection";
import Skill from "./components/Skills/Skill";
import WorkExperience from "./components/WorkExperience/WorkExperience";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div id="home" className="section">
          <Hero />
        </div>
        <div id="skills" className="section">
          <Skill />
        </div>
        <div id="workexperience" className="section">
          <WorkExperience />
        </div>
        <div id="project" className="section">
          <ProjectsSection/>
        </div>
        <div id="contactme" className="section">
          <ContactMe />
        </div>
        
      </div>
    </>
  );
}

export default App;
