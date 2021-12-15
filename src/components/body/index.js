import React from 'react';
import './body.css';
import Skills from './skills';
import Contact from './contact';
import Work from './work';
import Projects from './projects';
import About from './about';
import Education from './education';
function Body() {
    return (
        <div className='body'>
            <section id="about">
                <About/>
            </section>
            <section id="projects">
                <Projects/>
            </section>
            <section id="skills">
                <Skills/>
            </section>
            <section id="work">
                <Work/>
            </section>
            <section id="education">
                <Education/>
            </section>
            <section id="contact">
                <Contact/>
            </section>
            
        </div>
    )
}

export default Body
