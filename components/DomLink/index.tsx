import styles from './styles.module.scss'
import { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
}

export function DomLink({ href, children }: Props) {
  return (
    <a
      className={styles.container}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </a>
  )
}
