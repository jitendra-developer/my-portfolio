import React from 'react';
import Seprator from '../../common/seprator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { educationData } from '../../../assets/data/education';
import './education.css';
import EducationCard from './education-card';
function Education({ }) {
    const data = educationData;
    return (
        <> 
       <Seprator/>
        <div className='education'>
            
            <lable className="section-title">Education</lable>
            <div className='education-list'>
                {data.map((education)=>{
                    return <EducationCard education={education}/>
                })}
            </div>
        </div>
        </>
    )
}

export default Education