import Image from 'next/image'
import NavBar from './Components/NavBar/NavBar' // Adjust the path as needed
import Project from './Components/Project/Project' // Adjust the path as needed

export default function Home() {
  return (
    <div>
      <NavBar />
      <section id='home' className='home'>
        <div className='home-content'>
          <h1>Hello...</h1>
          <h2>I'm Trevor Small</h2>
        </div>
      </section>
      <section id='about' className='about'>
        <div className='about-content'>
          <div className='about-image'>
            <Image
              src='/placeholder_pfp.JPG' // Use forward slash, relative to the public folder
              alt='About Me'
              width={250}
              height={250}
              className='about-image'
            />
          </div>
          <h2>About Me</h2>
          <p>
            I am a software developer who loves working on new projects and learning new
            technologies. Most of my passion lies in game development and web development.
          </p>
        </div>
      </section>
      <section id='projects' className='projects'>
        <div className='projects-content'>
          <h1>My Projects</h1>
          <ul className='projects-list'>
            <Project
              title='Boiler Room'
              description='A Steam-based game recommendation web tool'
              image='https://placehold.co/600x400?text=Project+1'
              link='https://boiler-room-481.onrender.com/'
            />
            <Project
              title='Fih Game'
              description='An online co-op game built in Unity.'
              image='https://placehold.co/600x400?text=Project+1'
              link=''
            />
            <Project
              title='Arcane Amnesia'
              description='A dungeon runner game built in Unity.'
              image='https://placehold.co/600x400?text=Project+1'
              link=''
            />
          </ul>
        </div>
      </section>
      <section id='contact' className='contact'>
        <div className='contact-content'>
          <h2>Contact Me</h2>
          <p>
            I would love to hear from you! Whether you have a question or just want to
            connect, feel free to reach out.
          </p>
          <form>
            <input type='text' placeholder='Your Name' required />
            <input type='email' placeholder='Your Email' required />
            <textarea placeholder='Your Message' required></textarea>
            <button type='submit'>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}
