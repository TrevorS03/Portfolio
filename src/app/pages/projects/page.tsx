'use client'

import React, { useState } from 'react'
import Styles from './projects.module.css'

// Pre-made projects with links
const projects = [
  {
    title: 'Portfolio Website',
    description:
      'The website you are on right now, showcasing my development projects and skills.',
    image: 'https://placehold.co/600x400?text=Portfolio+Website',
    link: '/', // or your live site URL, e.g. 'https://yourname.dev'
  },
  {
    title: 'Boiler Room',
    description:
      'A Steam-based game recommendation website which uses the Steam API to link games and account info into an easy-to-digest format.',
    image: 'https://placehold.co/600x400?text=Boiler+Room',
    link: 'https://github.com/yourusername/boiler-room', // ← replace with your actual repo or live demo
  },
  {
    title: 'Fih Game',
    description: 'A relaxing multiplayer fishing game built in Unity with C# scripting.',
    image: 'https://placehold.co/600x400?text=Fih+Game',
    link: 'https://github.com/yourusername/fih-game', // ← replace with GitHub / Itch.io / demo link
  },
  {
    title: 'Special Interest Project',
    description:
      'A short platformer game a small group and I made for our high school programming class.',
    image: 'https://placehold.co/600x400?text=Special+Interest+Project',
    link: 'https://trevtrev.itch.io/special-interest-project', // ← replace with actual link
  },
]

const Projects = () => {
  // ← renamed component to Projects (more semantic than Resume)
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const currentProject = projects[currentIndex]

  return (
    <section id='projects' className={Styles.projects}>
      {' '}
      {/* changed id to "projects" */}
      <h1>Projects I Have Worked On</h1>
      <span>
        Here are some of the projects I have worked on. Each project showcases my skills
        and creativity in web and game development.
      </span>
      <div className={Styles.carousel}>
        <button className={Styles.arrow} onClick={prevProject}>
          &lt;
        </button>

        <div className={Styles.projectCardWrapper}>
          <a
            href={currentProject.link}
            target='_blank'
            rel='noopener noreferrer'
            className={Styles.projectCardLink} // optional class for extra styling if needed
          >
            <div className={Styles.projectCard}>
              {currentProject.image && (
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  loading='lazy' // good for performance
                />
              )}

              <div className={Styles.projectCardOverlay}>
                <h3>{currentProject.title}</h3>
                <p>{currentProject.description}</p>
              </div>
            </div>
          </a>
        </div>

        <button className={Styles.arrow} onClick={nextProject}>
          &gt;
        </button>
      </div>
    </section>
  )
}

export default Projects
