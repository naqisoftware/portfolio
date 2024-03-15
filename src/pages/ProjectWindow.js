import React from 'react';
import { useParams } from 'react-router-dom';
import { ListOfProjects } from '../projects/ListOfProjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import '../styles/ProjectWindow.css';


function ProjectWindow() {
  const { id } = useParams();
  const project  = ListOfProjects[id]
  

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img alt='some imge' src={project.image} />
      
      
      <h2 class="website"><a href={project.website} target="_blank" rel="noreferrer">Link To Application</a></h2>
      

      <p>
        {project.skills}
      </p>
      <a href="https://github.com/naqisoftware" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  )
}

export default ProjectWindow