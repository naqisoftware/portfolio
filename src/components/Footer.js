import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub'; // Correct the import statement for GitHubIcon
import '../styles/Footer.css';

function Footer() {
  const emailAddress = 'naqisoftware19972020@gmail.com';
  const linkedinUrl = "https://www.linkedin.com/in/naqi-ghol-637b2a2ba";

  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        <a href={`mailto:${emailAddress}`}>
          <EmailIcon />
        </a>
        <a href="https://github.com/naqisoftware" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </a>
      </div>
      <p>&copy; 2024 Naqi Ghol portfolio. All Rights Reserved. Website content and design.</p>
    </div>
  );
}

export default Footer;
