import {cache} from 'react'
import {readFiles} from './read-files'
import type {Thought} from './types'

export const getThoughts = cache(async () => {
  const thoughtsWithMetadata = readFiles('./thoughts/') as Thought[]

  const filtered = thoughtsWithMetadata
    .filter((thought) => thought !== null)
    .sort((a, b) => (a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0))

  return filtered
})

export async function getThought(slug: string) {
  const thoughts = await getThoughts()
  return thoughts.find((thought) => thought.slug === slug)
}

export default getThoughts
