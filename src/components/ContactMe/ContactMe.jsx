import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div className="contact-nav" >
          <ContactInfoCard
            iconUrl="./assets/Images/Email.png"
            text="Email"
            link="mailto:virendobariya2@gmail.com"
          />
           <ContactInfoCard
            iconUrl="./assets/Images/linkdin.png"
            text="LinkedIn"
            link="https://www.linkedin.com/in/viren-dobariya-3a1b4b22a/"
          />
          
          <ContactInfoCard
            iconUrl="./assets/Images/github.png"
            text="GitHub" 
            link="https://github.com/VirenDobariya2"
          
          />
          <ContactInfoCard
            iconUrl="./assets/Images/WhatsApp.png"
            text="+91 83201-25874" 
            link="tel:+91 83201-25874"

          />

          
        </div>
        <div>
        
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
