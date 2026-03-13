import Link from 'next/link'
import Styles from './page.module.css'
import Image from 'next/image'
import ProjectViewer from '../../Components/ProjectsViewer/ProjectViewer'
import Skills from '../../Components/Skills/Skills'

export default function HomePage() {
  return (
    <div id='root'>
      <section id='home' className={Styles.home}>
        <div className={Styles.gridContainer}>
          <div className={Styles.homeContent}>
            <h1>Hello, I'm Trevor Small.</h1>
            <h2>Software Developer, Game Developer, and Tech Enthusiast</h2>
            <div className={Styles.buttonContainer}>
              <Link href='/pages/about' className={Styles.moreButton}>
                About Me
              </Link>
              <Link href='/pages/resume' className={Styles.moreButton}>
                My Resume
              </Link>
              <Link
                className={Styles.LinkedIn}
                href='https://www.linkedin.com/in/trevorsmall03/'
                target='_blank'
                rel='noopener noreferrer'
                title='Go to my LinkedIn'
              >
                LinkedIn
              </Link>
            </div>
          </div>
          <div className={Styles.skillsCard}>
            <Skills />
          </div>
          <div className={Styles.projectsContainer}>
            <ProjectViewer />
          </div>
        </div>
      </section>
    </div>
  )
}
