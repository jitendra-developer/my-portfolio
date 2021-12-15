import React from 'react';
import './project-card2.css'
function ProjectCard2({project}) {
    return (
        <div className='card-container'>
            <div className='image-container' style={{ backgroundImage:`url(${project.image})` }} />
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{project.title}</h3>
                </div>
                <div className='card-body'>
                    <p>{project.about}</p>
                </div>
            </div>
            <div className='project-tags-2'>
                    {project.tags.map((tag)=>{
                        return(
                            <lable className="tag">{tag}</lable>
                        )
                    })}
            </div>
        </div>
    )
}

export default ProjectCard2
