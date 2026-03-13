'use client'

import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

export default function About() {
  return (
    <section id='about' className={styles.about}>
      <h1 className={styles.aboutHeading}>About Me</h1>

      <div className={styles.aboutCard}>
        {/* Profile Image */}
        <div className={styles.imageContainer}>
          <Image
            src='/pictureofme.png'
            alt='Trevor Small - Profile'
            width={260}
            height={260}
            className={styles.profileImage}
            priority // optional: load early if above fold
          />
        </div>

        {/* Bio Text */}
        <div className={styles.textWrapper}>
          <p className={styles.aboutText}>
            {`
            I am a 22 year old developer and Tech Enthusiast from Jackson, MI. I started
            my programming journey in middle school and worked my way up and completed my
            degree in Computer Science in April 2025. I am passionate about all things
            tech. Whether it be creating beautiful and functional web applications, making
            games, or building custom PCs I love a good technical challenge.
          `}
            <br />
            <br />
            {`I hope to release my first purchasable game by the end 2026. So please
            stay on the lookout. It will be based on a project I did for my Game
            Programming class. See the trailer for that project below. My journey so far
            in tech has been filled with so much learning and growth, and I am excited to
            share my work with you and continue to grow my skills.
          `}
          </p>
        </div>
      </div>

      <div className={styles.videoContainer}>
        <div className={styles.videoWrapper}>
          <video loop muted playsInline controls className={styles.aboutVideo}>
            <source src='/ArcaneAmnesiaTrailer.mp4' type='video/mp4' />
            {`Sorry, your browser doesn't support embedded videos.`}
          </video>
        </div>

        <p className={styles.videoCaption}>
          Arcane Amnesia – Gameplay Trailer (Unity Project)
        </p>
      </div>
    </section>
  )
}
