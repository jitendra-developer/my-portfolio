import React from 'react';
import './about.css';
import Typewriter from 'typewriter-effect';

function About() {
    return (
        <div className='about'>
            <div className='about-top'>
                <div className='about-info'>
                    Hello there , I am
                    <br /> <span className='info-name'><Typewriter onInit={(typewriter) => {
                                typewriter.typeString('Jitendra Kumar')
                                        .callFunction(() => {  })
                                                      .start();}}/>
                            </span>I love experimenting with the web.
                </div>
                <div className='about-photo'>
                    <img className='picture' src={require('../../../assets/coding.png').default} alt="placeholder"></img>
                </div>

            </div>
        </div>
    )
}

export default About
