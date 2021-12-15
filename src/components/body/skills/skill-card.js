import React from 'react';
import './skill-card.css';
function SkillCard({ skill }) {
    return (
        <div className='skill-card'>
            <div className='skill-icon'>{ skill.icon }</div>
            <lable className="skill-name">{ skill.name }</lable>
        </div>
    )
}

export default SkillCard
