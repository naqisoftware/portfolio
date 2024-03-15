import React from 'react';
import ProjectList from '../components/ProjectList';
import { ListOfProjects } from '../projects/ListOfProjects';
import '../styles/Project.css';


function Projects() {
  return (
    <div className="projects">
      <h1>My Personal Projects</h1>
      <div className="projectList">
        {ListOfProjects.map((project, index) => {
          return <ProjectList id={index} name={project.name} image={project.image} />
        })}
      </div>
    </div>
  )
}

export default Projects