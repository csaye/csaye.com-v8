import { PageLayout } from '@/components/PageLayout'
import styles from './page.module.scss'
import Link from 'next/link'
import { type Writing, writings } from './writings'
import { writingToDateString } from './utils'
import { IconLink } from '@/components/IconLink'

export default function Writing() {
  const groupedWritings = Object.entries(
    Object.groupBy(writings, (writing) => `${writing.month}-${writing.year}`)
  ).toReversed() as [string, Writing[]][]

  return (
    <PageLayout
      title={'Writing'}
      subtitle={'Thoughts about the world'}
      icons={<IconLink icon='back-arrow' href='/' />}
      content={
        <>
          {groupedWritings.map(([date, writings]) => (
            <section className={styles.dateSection} key={date}>
              <p>{writingToDateString(writings[0])}</p>
              <ul>
                {writings.map((writing) => (
                  <li key={writing.path}>
                    <Link href={`/writing/${writing.path}`}>
                      {writing.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </>
      }
    />
  )
}
