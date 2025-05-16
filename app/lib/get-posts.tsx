import {cache} from 'react'
import fs from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'
import type {Post} from './types'

const thirdPartyPosts: Post[] = [
  {
    title: '#13 | Diving Deep into React Server Components',
    description:
      'Explore the power of React Server Components (RSCs) and how they can revolutionize your Next.js development workflow, improving performance and simplifying data fetching.',
    date: '2025-05-16',
    slug: 'diving-deep-into-react-server-components',
    tags: [],
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/diving-deep-into-react-server-components',
    type: 'post',
  },
  {
    title: '#12 | My Favorite Web Dev Tools (Design, Code, SEO & More)',
    description:
      'Here’s my curated collection of tools I regularly use (and recommend!) across every part of the frontend workflow.',
    date: '2025-04-04',
    slug: 'my-favorite-web-dev-tools',
    tags: [],
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/my-favorite-web-dev-tools',
    type: 'post',
  },
  {
    title: '#11 | TypeScript: The Future of JavaScript Development',
    description:
      'TypeScript is rapidly becoming the preferred language for JavaScript developers, offering enhanced productivity and scalability',
    date: '2025-01-27',
    slug: 'the-future-of-javascript-typescript',
    tags: [],
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/the-future-of-javascript-typescript',
    type: 'post',
  },
  {
    title: '#10 | The JavaScript Battle',
    description: 'React, Vue, & Angular',
    date: '2024-12-03',
    slug: 'the-javascript-battle-react-vue-and-angular',
    tags: [],
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/the-javascript-battle-react-vue-and-angular',
    type: 'post',
  },
  {
    title: '#9 | My Journey Thus Far',
    description: 'The Growth, Challenges, & Hope',
    date: '2024-09-27',
    slug: 'my-journey-thus-far',
    tags: [],
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/my-journey-thus-far',
    type: 'post',
  },
  {
    title: '#8 | The Evolution of Web Development',
    description: 'From Static Pages to Dynamic Experiences',
    date: '2024-08-18',
    slug: 'the-evolution-of-web-development',
    tags: [],
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/the-evolution-of-web-development',
    type: 'post',
  },
  {
    title: '#7 | A Social Presence for Developers',
    description: 'Having a robust social presence is essential for developers',
    date: '2024-07-17',
    slug: 'a-social-presence-for-developers',
    tags: [],
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/a-social-presence-for-developers',
    type: 'post',
  },
  {
    title: '#6 | The Rise of Serverless Architecture',
    description: 'Transforming Modern Web Development',
    date: '2024-06-17',
    slug: 'the-rise-of-serverless-architecture',
    tags: [],
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/the-rise-of-serverless-architecture',
    type: 'post',
  },
  {
    title: '#5 | The Headless CMS',
    description: 'Why Sanity Studios is the ideal CMS for your next project?',
    date: '2024-05-16',
    slug: 'the-headless-cms',
    tags: [],
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/the-headless-cms',
    type: 'post',
  },
  {
    title: '#4 | Navigating the Storm',
    description: 'Understanding the Recent Wave of Layoffs in the Tech Industry',
    date: '2024-04-25',
    slug: 'navigating-the-storm',
    tags: [],
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/navigating-the-storm',
    type: 'post',
  },
  {
    title: '#3 | A Paradigm Shift',
    description: 'The Ascendance of AI in Software and Web Development: A Paradigm Shift',
    date: '2024-03-19',
    slug: 'a-paradigm-shift',
    tags: [],
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/a-paradigm-shift',
    type: 'post',
  },
  {
    title: '#2 | #buildinpublic',
    description:
      'UNVEILING THE AWESOMENESS OF #BuildingInPublic: A RADICAL APPROACH TO TRANSPARENCY AND CONNECTION',
    date: '2024-01-21',
    slug: 'build-in-public',
    tags: [],
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/build-in-public',
    type: 'post',
  },
  {
    title: '#1 | Here Goes Nothing',
    description: 'Embarking on a Journey through the Technological Realm',
    date: '2024-01-09',
    slug: 'here-goes-nothing',
    tags: [],
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/here-goes-nothing',
    type: 'post',
  },
]

export const getPosts = cache(async (includeThirdPartyPosts?: boolean) => {
  const posts = await fs.readdir('./posts/')

  const postsWithMetadata = await Promise.all(
    posts
      .filter((file) => path.extname(file) === '.md' || path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./posts/${file}`
        const postContent = await fs.readFile(filePath, 'utf8')
        const {data, content} = matter(postContent)

        if (data.published === false) {
          return null
        }

        return {...data, body: content, type: 'post'} as Post
      }),
  )

  const postsWithMetadataAndThirdPartyPosts = [
    ...postsWithMetadata,
    ...(includeThirdPartyPosts ? thirdPartyPosts : []),
  ]

  const filtered = postsWithMetadataAndThirdPartyPosts
    .filter((post) => post !== null)
    .sort((a, b) =>
      a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0,
    ) as Post[]

  return filtered
})

export async function getPost(slug: string) {
  const posts = await getPosts()
  return posts.find((post) => post.slug === slug)
}

export default getPosts
