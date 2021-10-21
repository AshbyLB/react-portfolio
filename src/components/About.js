import React from 'react';
import './About.css';
import Ashby from '../../src/images/ashbyi.jpg';


function About() {
    return (
        <section>
            <div id="aboutStyle">
            <h2>About Me</h2>
            <img id="me" src={Ashby} alt="Photo of Ashby in Ireland"/>
            <p>I'm a current student of the UNCC Full-Stack Coding Bootcamp. With a background in theatre and performing
                arts, I am bringing my knowledge of entertainment into the world of development. I am seeking a job
                in front-end and back-end web development. I have a lengthy job history as a manager/supervisor of teams
                of up to 25 people.
                In my years of managerial experience, I have honed my time management
                and organizational skills, as well as developing strong communication
                skills. I look
                forward to starting my career in web development.
                Please take a moment
                to navigate through my portfolio page and feel free to contact me anytime.
                </p>
                </div>
        </section>
    )
};

export default About;