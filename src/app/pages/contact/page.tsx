'use client'

import React from 'react';
import Image from "next/image";


const Resume = () => {
    return (
<section id="about" className="about">
      <div className="about-content">
        <div className="about-image">
          <Image
            src="/placeholder_pfp.JPG" // Use forward slash, relative to the public folder
            alt="About Me"
            width={250}
            height={250}
            className="about-image"
          />
        </div>
        <h2>About Me</h2>
        <p>
          I am a passionate developer with a love for creating beautiful and
          functional web applications. My journey in tech has been filled with
          learning and growth, and I am excited to share my work with you.
        </p>
      </div>
    </section>
    );
};

export default Resume;