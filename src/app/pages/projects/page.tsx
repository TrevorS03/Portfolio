'use client'

import React from 'react';
import Styles from './projects.module.css';
import ProjectsList from '@/app/Components/ProjectsList/ProjectsList';


const Resume = () => {
    return (
      <section id="about" className={Styles.projects}>
        <h1>Projects I have worked on</h1>
        <span>
            Here are some of the projects I have worked on. Each project
            showcases my skills and creativity in web and game dev.
        </span>
        <div className={Styles.projectsContent}>
            <ProjectsList />
        </div>
      </section>
    );
};

export default Resume;