'use client'

import React from 'react'
import styles from './page.module.css'

const Resume = () => {
  return (
    <main className={styles.resumePage}>
      <div className={styles.resumeContent}>
        <h1 className={styles.title}>My Resume</h1>

        <div className={styles.pdfWrapper}>
          <iframe
            src='/resume.pdf'
            className={styles.pdfViewer}
            title='Trevor Small - Resume'
          />
        </div>

        {/* Optional fallback / download hint */}
        <p className={styles.fallback}>
          Can't see the preview?{' '}
          <a href='/resume.pdf' download className={styles.downloadLink}>
            Download PDF
          </a>
        </p>
      </div>
    </main>
  )
}

export default Resume
