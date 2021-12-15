import React from 'react';
import './social-contact.css';
import {SocialData} from '../../../assets/data/social';
import { icon } from '@fortawesome/fontawesome-svg-core';

function SocialContact() {
    const data = SocialData;
    return (
        <div className='social-contact'>
            {data.map((item)=>{
                return(
                    <a href={item.link} target="_blank">
                        <div className='social-icon-div'>
                            <>
                            { item.icon }
                            </>
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default SocialContact
