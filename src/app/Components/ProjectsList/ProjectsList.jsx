import React from 'react';
import Project from '../Project/Project';
import Styles from './ProjectsList.module.css';

const ProjectsList = () => {
    return (
        <div className={Styles.projectList} target="_blank">
          <ul className={Styles.projectList}>
          <li>
            <Project title="Boiler Room" description="A Steam-based game recommendation web tool" image="https://placehold.co/600x400?text=Project+1" link="https://boiler-room-481.onrender.com/" />
          </li>
          <li>
            <Project title="Arcane Amnesia" description="A Steam-based game recommendation web tool" image="https://placehold.co/600x400?text=Project+2" link="https://boiler-room-481.onrender.com/" />
          </li>
          <li>
          <Project title="Arcane Amnesia" description="A Steam-based game recommendation web tool" image="https://placehold.co/600x400?text=Project+2" link="https://boiler-room-481.onrender.com/" />

          </li>
        </ul>
        </div>
    );
}

export default ProjectsList;