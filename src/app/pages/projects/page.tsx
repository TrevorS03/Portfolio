'use client'

import React from 'react';
import Styles from './projects.module.css';
import ProjectsList from '@/app/Components/ProjectsList/ProjectsList';


const Resume = () => {
    return (
<section id="about" className="about">
  <div className={Styles.projectsContent}>
    <h2>My Projects</h2>
    <p>
      Here are some of the projects I have worked on. Each project
      showcases my skills and creativity in web development.
          </p>
      <ProjectsList />
  </div>
</section>
    );
};

export default Resume;