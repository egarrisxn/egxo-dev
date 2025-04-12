import {cache} from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import type {Thought} from './types'

export function readFiles<
  T extends {
    date: string
  },
>(dirPath: string) {
  const files = fs.readdirSync(dirPath)

  const parsed = files
    .filter((file) => path.extname(file) === '.md' || path.extname(file) === '.mdx')
    .map((file) => {
      const filePath = `./${dirPath}/${file}`
      const postContent = fs.readFileSync(filePath, 'utf8')
      const {data, content} = matter(postContent)

      if (data.published === false) {
        return null
      }

      return {...data, body: content}
    }) as unknown as (T | null)[]

  const filtered = parsed
    .filter((post) => post !== null)
    .sort((a, b) => (a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0)) as T[]
  return filtered
}

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
