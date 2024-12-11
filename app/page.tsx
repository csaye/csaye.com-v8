export const revalidate = 0

import { IconLinkExternal } from '@/components/IconLink'
import { LinkExternal } from '@/components/LinkExternal'
import Link from 'next/link'
import { PageLayout } from '@/components/PageLayout'

const GITHUB_URL = 'https://github.com/csaye'
const LINKEDIN_URL = 'https://www.linkedin.com/in/coopersaye/'
const TWITTER_URL = 'https://twitter.com/cooperjsaye'

export default function Home() {
  return (
    <PageLayout
      title='Cooper Saye'
      subtitle={
        <>
          Day {getDay().toLocaleString()} at{' '}
          <LinkExternal href='https://ramp.com/'>Ramp</LinkExternal>
        </>
      }
      icons={
        <>
          <IconLinkExternal icon='github' href={GITHUB_URL} />

          <IconLinkExternal icon='linkedin' href={LINKEDIN_URL} />

          <IconLinkExternal icon='twitter' href={TWITTER_URL} />
        </>
      }
      content={
        <>
          <p>
            I’m a software engineer at Ramp building the fastest-growing{' '}
            <LinkExternal href='https://ramp.com/bill-pay'>
              bill payment platform
            </LinkExternal>{' '}
            in America. I’m also chief of staff at{' '}
            <LinkExternal href='https://www.contrary.com/'>
              Contrary
            </LinkExternal>
            , the investment firm that backs the bold. I’m passionate about
            startups and full-stack development.
          </p>

          <p>
            I attend the University of Michigan, studying computer science and
            mathematics (currently on leave). I spend most of my time in New
            York City.
          </p>

          <p>
            View my <Link href='/projects'>projects</Link> and{' '}
            <Link href='/writing'>writings</Link> or follow me on{' '}
            <LinkExternal href={GITHUB_URL}>GitHub</LinkExternal>,{' '}
            <LinkExternal href={LINKEDIN_URL}>LinkedIn</LinkExternal>, and{' '}
            <LinkExternal href={TWITTER_URL}>Twitter</LinkExternal>.
          </p>
        </>
      }
    />
  )

  function getDay() {
    const start = new Date('2023-05-15T00:00:00-04:00')
    const ms = Date.now() - start.getTime()
    return Math.floor(ms / 1000 / 60 / 60 / 24)
  }
}
