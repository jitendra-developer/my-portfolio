import React from 'react';
import './skills.css';
import Seprator from '../../common/seprator/index'
import { SkillData } from '../../../assets/data/skills';
import SkillCard from './skill-card';

function Skills() {
    const data = SkillData;
    return (
        <>
        <Seprator/>
        <div className='skills'>
            <lable className="section-title">Skills</lable>
            <div className='skills-section'> 
            {data.map((item)=>{
                return(
                   <SkillCard skill={item} />
                )
            })}
            </div>
        </div>
        </>
    )
}

export default Skills
