import React from 'react';
import './ContactInfoCard.css';

const ContactInfoCard = ({ iconUrl, text, link }) => {

  const renderContent = () => (
    <>
      <div className="icon">
        <img src={iconUrl} alt={text} />
        
      </div>
      <p>{text}</p>
    </>
  );

  return (
    <div className='contact'>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="contact-details-card">
          {renderContent()}
        </a>
      ) : (
        <div className='contact-details-card'>
          {renderContent()}         
        </div>       
      )}
      
    </div>
  );
};

export default ContactInfoCard;
