import React from 'react'
import Styles from './Project.module.css'
import Image from 'next/image'

const Project = ({ title, description, link, image }) => {
  return (
    <div className={Styles.project} href={link} target='_blank'>
      <div className={Styles.projectInfo}>
        <h1 className={Styles.projectTitle}>{title}</h1>
        <p className={Styles.projectDescription}>{description}</p>
      </div>
      <Image
        className={Styles.projectImage}
        src={image}
        alt={title}
        width={100}
        height={100}
      />
    </div>
  )
}

export default Project
