import Link from 'next/link';
import Styles from './page.module.css';

export default function HomePage() {
    return (
        <div>
            <section id="home" className={Styles.home}>
                <div className={Styles.homeContent}>
                    <h1>Hello!</h1>
                    <h2>I'm Trevor Small</h2>
                </div>
                    <Link href="/pages/about" className={Styles.moreButton}>More About Me</Link>
            </section>
        </div>
    );
}