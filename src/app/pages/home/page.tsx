import Link from 'next/link'
import Styles from './page.module.css'

export default function HomePage() {
  return (
    <div>
      <section id='home' className={Styles.home}>
        <div className={Styles.homeContent}>
          <h1>Hello!</h1>
          <h2>{`I'm Trevor Small.`}</h2>
          <div className={Styles.buttonContainer}>
            <Link href='/pages/about' className={Styles.moreButton}>
              About Me
            </Link>
            <Link href='/pages/resume' className={Styles.moreButton}>
              My Resume
            </Link>
            <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
              <img src='/LI-In-Bug.png' alt='LinkedIn' className={Styles.LinkedIn} />
            </a>
          </div>
          <div className={Styles.skillsContainer}>
            <h2>My Skills</h2>
            <div className={Styles.skillsIcons}>
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg'
                alt='Git'
              />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg'
                alt='C#'
              />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg'
                alt='Unity'
              />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg'
                alt='Next.js'
              />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
                alt='CSS3'
              />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
                alt='HTML5'
              />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg'
                alt='JavaScript'
              />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
                alt='React'
              />
              <img
                src='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg'
                alt='Java'
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
