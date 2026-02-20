import Link from 'next/link'
import Styles from './page.module.css'
import Image from 'next/image'
import ProjectViewer from '../../Components/ProjectsViewer/ProjectViewer'

export default function HomePage() {
  return (
    <div>
      <section id='home' className={Styles.home}>
        <div className={Styles.gridContainer}>
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
              <a
                href='https://www.linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
              >
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

          <div className={Styles.projectsContainer}>
            <ProjectViewer />
          </div>
          <div className={`${Styles.textCard} ${Styles.aboutCard}`}>
            <Image
              src='/pictureofme.png' // Path to your image file
              alt='Profile picture'
              width={260}
              height={260}
              priority // good for above-the-fold image
            />
            <p className={Styles.aboutText}>
              I am a 22 year old developer from the United States. I have been programming
              since I was in middle school. I am passionate about all things tech. Whether
              it be creating beautiful and functional web applications, making games, or
              building custom PCs I love a good technical challenge. Hopefully I will have
              my first purchasable game released by 2026! It will be based on a project I
              did in my Game Programming class. My journey so far in tech has been filled
              with so much learning and growth, and I am excited to share my work with you
              and continue to grow my skills.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
