import React from 'react';
import Seprator from '../../common/seprator';
import './contact.css';
import SocialContact from '../../common/social-contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Contact() {
    return (
        <div className='contact'>
            <Seprator/>
            <lable className="section-title">Contact</lable>
            <div className='contact-container'>
                <div className='contact-left'>
                    <p>Want to get in touch?</p>
                    <p><FontAwesomeIcon icon="phone"/> : 8299722562</p>
                    <a href='mailto:kjitendra561@gmail.com'><FontAwesomeIcon icon="envelope"/> : kjitendra561@gmail.com</a>
                </div>
                <div className='download'>
                    <a download href={require('../../../assets/resume.docx').default}>
                        <FontAwesomeIcon icon="download" className='download-icon'/>
                        Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
