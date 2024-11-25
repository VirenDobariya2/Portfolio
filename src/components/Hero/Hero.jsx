import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>
          Hello, My Name <span>VIREN</span>
        </h2>
        <p>
          Passionate Frontend Developer | Trasforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="hero-icon">
            <div className="tech-icon">
              <img src="./assets/Images/React.png" alt="" />
            </div>
            <div className="tech-icon">
              <img src="./assets/Images/nextjs.png" alt="" />
            </div>
          </div>
          <img src="./assets/Images/viren.jpg" alt="" />
          <div className="hero-icon">
          <div className="tech-icon">
            <img src="./assets/Images/Typescript.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/Images/Javascript.png" alt="" />
          </div>
          </div>
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/Images/HTML.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/Images/CSS.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/Images/firebase.png" alt="" />
          </div>
             <div className="tech-icon">
            <img src="./assets/Images/AwsLambda.jpeg" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/Images/react-router.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/Images/Redux.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
