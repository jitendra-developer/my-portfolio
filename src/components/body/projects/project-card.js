import React from 'react'
import './project-card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ProjectCard({ project }) {
    return (
        <div className='project-card'>
            <div className='project-info'>
                <lable className="project-title">{project.title}</lable>
                <div className='project-links'>
                    {project.demo&& (<a className='project-link' href={project.demo}>
                        <div className='link-button'>
                            <FontAwesomeIcon icon="link"/> Demo
                        </div>
                        </a>)}
                        {project.github&& (<a className='project-link' href={project.github}>
                        <div className='link-button'>
                        <i class="devicon-github-original"></i> Github
                        </div>
                        </a>)}
                </div>
                <p>{project.about}</p>
                <div className='project-tags'>
                    {project.tags.map((tag)=>{
                        return(
                            <lable className="tag">{tag}</lable>
                        )
                    })}
                </div>
            </div>
            <img className='project-photo' src={project.image} />
        </div>
    )
}

export default ProjectCard
