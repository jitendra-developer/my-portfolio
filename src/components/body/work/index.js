import React from 'react';
import './work.css';
import Seprator from '../../common/seprator';
import { workData } from '../../../assets/data/work';
import WorkCard from './work-card';

function Work() {
    const data = workData;
    return (
        <>
        <Seprator/>
        <div className='work'>
            
            <lable className="section-title">Work</lable>
            <div className='work-list'>
                {data.map((item)=>{
                    return(
                        <WorkCard item={item}/>
                    )
                })}
            </div>
        </div>
        </>
    )
}

export default Work
