import styles from './styles.module.scss'
import github from '@/public/icons/github.svg'
import linkedin from '@/public/icons/linkedin.svg'
import twitter from '@/public/icons/twitter.svg'
import Image from 'next/image'

type Icon = 'github' | 'linkedin' | 'twitter'

type Props = {
  icon: Icon
  href: string
}

const iconToSrc: Record<Icon, string> = {
  github: github,
  linkedin: linkedin,
  twitter: twitter,
}

const SIZE = 36

export function DomIconLink({ icon, href }: Props) {
  return (
    <a
      className={styles.container}
      href={href}
      target='_blank'
      rel='noopener noreferrer'
    >
      <Image src={iconToSrc[icon]} alt={icon} width={SIZE} height={SIZE} />
    </a>
  )
}
