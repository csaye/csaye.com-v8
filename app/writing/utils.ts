import { Writing } from './writings'

export function writingToDateString(writing: Writing) {
  return new Date(
    Number(writing.year),
    Number(writing.month) - 1
  ).toLocaleDateString(undefined, {
    month: 'short',
    year: 'numeric',
  })
}
