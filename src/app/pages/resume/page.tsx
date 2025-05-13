'use client'

import React from 'react';
import Styles from './page.module.css';

const Resume = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <embed src="/resume.pdf" width="800px" height="1100px" className={Styles.resume}/>
        </div>
    );
};

export default Resume;