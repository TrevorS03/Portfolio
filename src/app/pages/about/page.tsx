'use client'

import React from 'react';
import Styles from './page.module.css';
import Image from "next/image";


const Resume = () => {
    return (
<section id="about" className={Styles.about}>
        <div className={Styles.aboutContent}>
          <h1>So who is this guy?</h1>
          <div className={Styles.aboutCard}>
        <div className={Styles.imageContainer}>
          <Image
            src="/placeholder_pfp.JPG" // Use forward slash, relative to the public folder
            alt="About Me"
            width={250}
            height={250}
            className="about-image"
          />
        </div>
        <p className={Styles.aboutText}>
            I am a 21 year old developer from the United States. I have been programming since
            I was in middle school. I am passionate about all things tech. Whether it be
            creating beautiful and functional web applications, making games, or building custom PCs I love a good technical challenge.
            Hopefully I will have my first purchasable game released by 2026! It will be based on a project I did in my Game Programming class.
            My journey so far in tech has been filled with so much learning and growth, and I am excited to share my work with you and continue to grow
            my skills.
            </p>
            </div>
      </div>
    </section>
    );
};

export default Resume;