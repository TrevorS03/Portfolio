'use client'

import React from 'react';
import Styles from './page.module.css';
import Project from '@/app/Components/Project/Project';


const Resume = () => {
    return (
<section id="about" className="about">
              <div className="projects-content">
          <h2>My Projects</h2>
          <p>
            Here are some of the projects I have worked on. Each project
            showcases my skills and creativity in web development.
          </p>
          <ul className="projects-list">
            <Project title="Boiler Room" description="A Steam-based game recommendation web tool" image="https://placehold.co/600x400?text=Project+1" link="https://boiler-room-481.onrender.com/"/>
            <Project title="Boiler Room" description="A Steam-based game recommendation web tool" image="https://placehold.co/600x400?text=Project+2" link="https://boiler-room-481.onrender.com/"/>
            <Project title="Boiler Room" description="A Steam-based game recommendation web tool" image="https://placehold.co/600x400?text=Project+3" link="https://boiler-room-481.onrender.com/"/>
          </ul>
        </div>
    </section>
    );
};

export default Resume;