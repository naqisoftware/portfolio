import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import '../styles/Home.css';

//ADDED
import { FaJava, FaJs, FaReact, FaDatabase, FaCode, FaPuzzlePiece  } from 'react-icons/fa';


function Home() {

  const emailAddress = 'naqisoftware19972020@gmail.com';
  const linkedinUrl = "https://www.linkedin.com/in/naqi-ghol-637b2a2ba";
  //TEST TEST TEST

  return (
    <div className="home">
      <div className="personal-info">
        {/* Some information and link to socials */}
        <h2>My name is Naqi Ghol</h2>
        <div className='front-page'>
          <p>
          Passionate software developer dedicated to continuous learning and creative problem-solving, 
          driven by a enthusiasm for mastering new technologies and crafting innovative solutions
          </p>
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
      </div>

      {/* Listing the skills in a column of three rows */}
      <div className="skills">
        <h1>Skills</h1>

          <div className="column">
            <h2>Programming Languages</h2>
              Java <FaJava className="icon" />
              JavaScript <FaJs className="icon" />
              C# <FaCode className="icon" />
          </div>
            
          <div className="column">
            <h2>Front-End</h2>
              React <FaReact className="icon" />
              JavaScript <FaJs className="icon" />
              Redux <FaPuzzlePiece  className="icon" />
          </div>

          <div className="column">
            <h2>Back-End</h2>
              Express.js <FaDatabase className="icon" /> 
              MySQL <FaDatabase className="icon" />
              SQL <FaDatabase className="icon" />
          </div>
        </div>

    </div>
  )
}

export default Home