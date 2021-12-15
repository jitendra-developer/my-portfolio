import React from 'react';
import './education-card.css';

function EducationCard({education}) {
    return (
        <div className='education-card'>
            <div className='education-container'>
            <lable className="education-title">{education.degree}</lable>
            <lable className="education-deciplin">{education.deciplin}</lable>
            <a className='education-college' href={education.collegeLink} target="_blank">{education.college}</a>
            <div className='education-dates'>
                  <lable>{education.dateStart}</lable> ~ <lable>{education.dateEnd}</lable>
              </div>
              <div className='education-desc'>
                  <p>{education.courseDesc}</p>
              </div>
              </div>
    </div>
    )
}

export default EducationCard
