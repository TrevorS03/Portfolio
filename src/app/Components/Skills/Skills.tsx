import Image from 'next/image'
import Styles from './Skills.module.css'

export default function Skills() {
  return (
    <section className={Styles.skillsSection}>
      <h2>Technologies I Work With</h2>

      <div className={Styles.skillsGrid}>
        <div className={Styles.skillCategory}>
          <h3>Languages</h3>
          <ul className={Styles.iconGrid}>
            <li>
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg'
                alt='C#'
                width={40}
                height={40}
              />
              <span>C#</span>
            </li>
            <li>
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
                alt='Java'
                width={40}
                height={40}
              />
              <span>Java</span>
            </li>
            <li>
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                alt='JavaScript'
                width={40}
                height={40}
              />
              <span>JavaScript</span>
            </li>
          </ul>
        </div>
        <div className={Styles.skillCategory}>
          <h3>Web</h3>
          <ul className={Styles.iconGrid}>
            <li>
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
                alt='Next.js'
                width={40}
                height={40}
              />
              <span>Next.js</span>
            </li>
            <li>
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                alt='React'
                width={40}
                height={40}
              />
              <span>React</span>
            </li>
            <li>
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                alt='CSS'
                width={40}
                height={40}
              />
              <span>CSS</span>
            </li>
            <li>
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                alt='HTML'
                width={40}
                height={40}
              />
              <span>HTML</span>
            </li>
          </ul>
        </div>

        <div className={Styles.skillCategory}>
          <h3>Tools</h3>
          <ul className={Styles.iconGrid}>
            <li>
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
                alt='Git'
                width={40}
                height={40}
              />
              <span>Git</span>
            </li>
            <li>
              <Image
                src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg'
                alt='Unity'
                width={40}
                height={40}
              />
              <span>Unity</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
