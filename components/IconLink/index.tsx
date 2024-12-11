import styles from './styles.module.scss'
import backArrow from '@/public/icons/back-arrow.svg'
import github from '@/public/icons/github.svg'
import linkedin from '@/public/icons/linkedin.svg'
import twitter from '@/public/icons/twitter.svg'
import Image from 'next/image'
import Link from 'next/link'

type Icon = 'back-arrow' | 'github' | 'linkedin' | 'twitter'

type Props = {
  icon: Icon
  href: string
}

// Icons from https://iconscout.com/unicons/free-line-icons
const iconToSrc: Record<Icon, string> = {
  'back-arrow': backArrow,
  github: github,
  linkedin: linkedin,
  twitter: twitter,
}

const SIZE = 36

export function IconLink({ icon, href }: Props) {
  return (
    <Link href={href}>
      <Image src={iconToSrc[icon]} alt={icon} width={SIZE} height={SIZE} />
    </Link>
  )
}

export function IconLinkExternal({ icon, href }: Props) {
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
