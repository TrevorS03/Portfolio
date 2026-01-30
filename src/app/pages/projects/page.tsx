'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './projects.module.css'

// Pre-made projects with links
const projects = [
  {
    title: 'Portfolio Website',
    description:
      'The website you are on right now, showcasing my development projects and skills.',
    image: 'https://placehold.co/600x400?text=Portfolio+Website',
    link: '/',
  },
  {
    title: 'Boiler Room',
    description:
      'A Steam-based game recommendation website which uses the Steam API to link games and account info into an easy-to-digest format.',
    image: 'https://placehold.co/600x400?text=Boiler+Room',
    link: 'https://github.com/COSC481W-2025Winter/Boiler-Room',
  },
  {
    title: 'Fih Game',
    description: 'A relaxing multiplayer fishing game built in Unity with C# scripting.',
    image: 'https://placehold.co/600x400?text=Fih+Game',
    link: 'https://github.com/yourusername/fih-game',
  },
  {
    title: 'Special Interest Project',
    description:
      'A short platformer game a small group and I made for our high school programming class.',
    image: 'https://placehold.co/600x400?text=Special+Interest+Project',
    link: 'https://trevtrev.itch.io/special-interest-project',
  },
]

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevProject = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }

  const nextProject = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const currentProject = projects[currentIndex]

  return (
    <section id='projects' className={styles.projects}>
      <h1 className={styles.sectionTitle}>Projects I Have Worked On</h1>

      <p className={styles.sectionDesc}>
        Here are some of the projects I have worked on. Each project showcases my skills
        and creativity in web and game development.
      </p>

      <div className={styles.carousel}>
        <button
          className={styles.arrow}
          onClick={prevProject}
          aria-label='Previous project'
        >
          ←
        </button>

        <div className={styles.projectCardWrapper}>
          <a
            href={currentProject.link}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.projectCardLink}
            aria-label={`View ${currentProject.title} project`}
          >
            <div className={styles.projectCard}>
              <Image
                src={currentProject.image}
                alt={`Screenshot of ${currentProject.title}`}
                width={600}
                height={400}
                sizes='(max-width: 768px) 90vw, 600px'
                className={styles.projectImage}
                priority={currentIndex === 0} // optional: prioritize first image
              />

              <div className={styles.projectCardOverlay}>
                <h3>{currentProject.title}</h3>
                <p>{currentProject.description}</p>
              </div>
            </div>
          </a>
        </div>

        <button className={styles.arrow} onClick={nextProject} aria-label='Next project'>
          →
        </button>
      </div>

      {/* Optional: show current position */}
      <div className={styles.indicators}>
        {projects.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === currentIndex ? styles.active : ''}`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
