import { onWriting } from './on-writing/page'

export type Writing = {
  title: string
  path: string
  month: number
  year: number
}

export const writings: Writing[] = [onWriting]
