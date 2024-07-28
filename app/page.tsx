import { DomIconLink } from '@/components/DomIconLink'
import styles from './page.module.scss'
import { DomLink } from '@/components/DomLink'
import Link from 'next/link'

const GITHUB_URL = 'https://github.com/csaye'
const LINKEDIN_URL = 'https://www.linkedin.com/in/coopersaye/'
const TWITTER_URL = 'https://twitter.com/cooperjsaye'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header>
          <div>
            <h1>Cooper Saye</h1>

            <p className={styles.subtitle}>
              Day {getDay().toLocaleString()} at{' '}
              <DomLink href='https://ramp.com/'>Ramp</DomLink>
            </p>
          </div>

          <div className={styles.links}>
            <DomIconLink icon='github' href={GITHUB_URL} />

            <DomIconLink icon='linkedin' href={LINKEDIN_URL} />

            <DomIconLink icon='twitter' href={TWITTER_URL} />
          </div>
        </header>

        <hr />

        <p>
          I’m a software engineer at Ramp building the fastest-growing{' '}
          <DomLink href='https://ramp.com/bill-pay'>
            bill payment platform
          </DomLink>{' '}
          in America. I’m also a venture partner at{' '}
          <DomLink href='https://www.contrary.com/'>Contrary</DomLink>, the
          investment firm that backs the bold.
        </p>

        <p>
          I attend the University of Michigan in Ann Arbor, studying computer
          science and mathematics. I’m originally from Los Angeles, CA but spend
          most of my time in New York, NY and Ann Arbor, MI.
        </p>

        <p>
          <Link href='/projects'>View my projects</Link> or follow me on{' '}
          <DomLink href={GITHUB_URL}>GitHub</DomLink>,{' '}
          <DomLink href={LINKEDIN_URL}>LinkedIn</DomLink>, and{' '}
          <DomLink href={TWITTER_URL}>Twitter</DomLink>.
        </p>
      </div>
    </div>
  )

  function getDay() {
    const start = new Date(2023, 4, 15)
    const ms = Date.now() - start.getTime()
    return Math.floor(ms / 1000 / 60 / 60 / 24)
  }
}
