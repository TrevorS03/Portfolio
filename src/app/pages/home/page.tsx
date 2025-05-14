import Link from 'next/link';
import Styles from './page.module.css';

export default function HomePage() {
    return (
        <div>
            <section id="home" className={Styles.home}>
                <div className={Styles.homeContent}>
                    <h1>Hello!</h1>
                    <h2>I'm Trevor.</h2>
                    <div className={Styles.buttonContainer}>
                        <Link href="/pages/about" className={Styles.moreButton}>More About Me</Link>
                        <Link href="/pages/Resume" className={Styles.moreButton}>My Resume</Link>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src="/LI-In-Bug.png" alt="LinkedIn" className={Styles.LinkedIn} />
                        </a>
                    </div>
                    <div className={Styles.skillsContainer}>
                        <h2>My Skills</h2>
                        <div className={Styles.skillsIcons}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}