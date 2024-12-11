export type Writing = {
  title: string
  path: string
  month: number
  year: number
}

export const onWriting: Writing = {
  title: 'On Writing',
  path: 'on-writing',
  month: 12,
  year: 2024,
}

export const writings: Writing[] = [onWriting]
