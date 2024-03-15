import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


import '../styles/Footer.css';

function Footer() {
  const emailAddress = 'naqisoftware19972020@gmail.com';
  const linkedinUrl = "https://www.linkedin.com/in/naqi-ghol-637b2a2ba";

  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
        <a href={`mailto:${emailAddress}`}>
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://github.com/naqisoftware" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <p>&copy; 2024 Naqi Ghol portfolio. All Rights Reserved. Website content and design.</p>
    </div>
  );
}

export default Footer;
