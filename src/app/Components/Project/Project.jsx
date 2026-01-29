import React from 'react'
import Styles from './Project.module.css'
import Image from 'next/image'

const Project = ({ title, description, link, image }) => {
  return (
    <div className={Styles.projectList} href={link} target='_blank'>
      <Image
        className={Styles.projectImage}
        src={image}
        alt={title}
        width={50}
        height={50}
      />
      <div className={Styles.projectInfo}>
        <h1 className={Styles.projectTitle}>{title}</h1>
        <p className={Styles.projectDescription}>{description}</p>
      </div>
    </div>
  )
}

export default Project
