'use client'

import React from 'react'
import styles from './page.module.css' // or whatever your module is named
import Image from 'next/image'

export default function About() {
  // ← renamed component to About (more semantic)
  return (
    <section id='about' className={styles.about}>
      <div className={styles.aboutCard}>
        <div className={styles.imageContainer}>
          <Image
            src='/pictureofme.png' // Path to your image file
            alt='Profile picture'
            width={260}
            height={260}
            className={styles.aboutImage} // optional: add if you want extra styling
            priority // good for above-the-fold image
          />
        </div>

        <p className={styles.aboutText}>
          I am a 21 year old developer from the United States. I have been programming
          since I was in middle school. I am passionate about all things tech. Whether it
          be creating beautiful and functional web applications, making games, or building
          custom PCs I love a good technical challenge. Hopefully I will have my first
          purchasable game released by 2026! It will be based on a project I did in my
          Game Programming class. My journey so far in tech has been filled with so much
          learning and growth, and I am excited to share my work with you and continue to
          grow my skills.
        </p>
      </div>
    </section>
  )
}
