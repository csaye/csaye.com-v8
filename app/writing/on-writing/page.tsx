import { PageLayout } from '@/components/PageLayout'
import { Writing } from '../writings'
import { writingToDateString } from '../utils'
import { IconLink } from '@/components/IconLink'

export const onWriting: Writing = {
  title: 'On Writing',
  path: 'on-writing',
  month: 12,
  year: 2024,
}

export default function OnWriting() {
  return (
    <PageLayout
      title={onWriting.title}
      subtitle={writingToDateString(onWriting)}
      icons={<IconLink icon='back-arrow' href='/writing' />}
      content={
        <>
          <p>
            A lot of talented people I know write. I’ve always felt an itch to
            write myself, but who am I to draw conclusions about the world? I
            haven’t visited every country. I haven’t started a company worth
            billions of dollars. I don’t have the wisdom of an 80-year-old.
          </p>

          <p>
            I think that’s a rather self-defeating stance though, and I could
            always keep moving the bar on myself. I’ve wanted to dive deeper
            into certain ideas for a long time, and publishing these writings is
            a means of holding myself to a standard of quality.
          </p>

          <p>
            Sometimes getting started is the hardest part. Well, this piece is
            me getting started. Hopefully it’s just the beginning.
          </p>
        </>
      }
    />
  )
}
