import React from 'react';
import { useParams } from 'react-router-dom';
import { ListOfProjects } from '../projects/ListOfProjects';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../styles/ProjectWindow.css';


function ProjectWindow() {
  const { id } = useParams();
  const project  = ListOfProjects[id]
  

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img alt='some imge' src={project.image} />
      
      
      <h2 class="website"><a href={project.website} target="_blank" rel="noreferrer">Flood Monitoring</a></h2>
      

      <p>
        {project.skills}
      </p>
      <a href="https://github.com/naqisoftware" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
      </a>
    </div>
  )
}

export default ProjectWindow