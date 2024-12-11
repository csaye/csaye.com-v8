import { ReactNode } from 'react'
import styles from './styles.module.scss'

type Props = {
  title: string
  subtitle: ReactNode
  icons: ReactNode
  content: ReactNode
}

export function PageLayout({ title: title, subtitle, icons, content }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.page}>
        <header className={styles.header}>
          <div>
            <h1>{title}</h1>

            <p className={styles.subtitle}>{subtitle}</p>
          </div>

          <div className={styles.icons}>{icons}</div>
        </header>

        <hr />

        <main className={styles.content}>{content}</main>
      </div>
    </div>
  )
}
