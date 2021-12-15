import React from 'react';
import './projects.css';
import ProjectCard from './project-card';
import { ProjectData } from '../../../assets/data/projects';
import ProjectCard2 from './project-card2';
import Seprator from '../../common/seprator';
function Projects() {
    const data = ProjectData;
    return (
        <div className='projects'>
            <Seprator/>
            <div className="section-title">
            <lable >projects</lable>
            </div>
            <div className='cards-container-wrapper'>
                {data.map((project)=>{
                    return <ProjectCard2 project={project}/>
                })}

            </div>
        </div>
    )
}

export default Projects
