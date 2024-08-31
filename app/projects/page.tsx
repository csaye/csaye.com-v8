'use client'
import { projects } from './projects'
import { Project } from './Project'
import styles from './page.module.scss'
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Projects() {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <div className={styles.header}>
        <Link href='/' className='link'>
          &larr; Return to homepage
        </Link>
      </div>
      <div className={styles.content}>
        <h1>Projects</h1>
        <div className={styles.projectsWrapper}>
          <div className={styles.projects}>
            {projects.map((project, i) => (
              <Project project={project} key={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        html,
        body {
          background-color: #fff;
          color: #000;
        }
      `}</style>
    </div>
  )
}
