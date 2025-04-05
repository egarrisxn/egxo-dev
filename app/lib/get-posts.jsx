import {cache} from 'react'
import fs from 'fs/promises'
import matter from 'gray-matter'
import path from 'path'

const thirdPartyPosts = [
    {
    title: '#12 | My Favorite Web Dev Tools (Design, Code, SEO & More)',
    description:
      'Here’s my curated collection of tools I regularly use (and recommend!) across every part of the frontend workflow.',
    body: '',
    date: '2025-04-04',
    slug: 'my-favorite-web-dev-tools',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/my-favorite-web-dev-tools',
    type: 'post',
  },
  {
    title: '#11 | TypeScript: The Future of JavaScript Development',
    description:
      'TypeScript is rapidly becoming the preferred language for JavaScript developers, offering enhanced productivity and scalability',
    body: '',
    date: '2025-01-27',
    slug: 'the-future-of-javascript-typescript',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/the-future-of-javascript-typescript',
    type: 'post',
  },
  {
    title: '#10 | The JavaScript Battle',
    description: 'React, Vue, & Angular',
    body: '',
    date: '2024-12-03',
    slug: 'the-javascript-battle-react-vue-and-angular',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/the-javascript-battle-react-vue-and-angular',
    type: 'post',
  },
  {
    title: '#9 | My Journey Thus Far',
    description: 'The Growth, Challenges, & Hope',
    body: '',
    date: '2024-09-27',
    slug: 'my-journey-thus-far',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/my-journey-thus-far',
    type: 'post',
  },
  {
    title: '#8 | The Evolution of Web Development',
    description: 'From Static Pages to Dynamic Experiences',
    body: '',
    date: '2024-08-18',
    slug: 'the-evolution-of-web-development',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/the-evolution-of-web-development',
    type: 'post',
  },
  {
    title: '#7 | A Social Presence for Developers',
    description: 'Having a robust social presence is essential for developers',
    body: '',
    date: '2024-07-17',
    slug: 'a-social-presence-for-developers',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/a-social-presence-for-developers',
    type: 'post',
  },
  {
    title: '#6 | The Rise of Serverless Architecture',
    description: 'Transforming Modern Web Development',
    body: '',
    date: '2024-06-17',
    slug: 'the-rise-of-serverless-architecture',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/the-rise-of-serverless-architecture',
    type: 'post',
  },
  {
    title: '#5 | The Headless CMS',
    description: 'Why Sanity Studios is the ideal CMS for your next project?',
    body: '',
    date: '2024-05-16',
    slug: 'the-headless-cms',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/the-headless-cms',
    type: 'post',
  },
  {
    title: '#4 | Navigating the Storm',
    description: 'Understanding the Recent Wave of Layoffs in the Tech Industry',
    body: '',
    date: '2024-04-25',
    slug: 'navigating-the-storm',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/navigating-the-storm',
    type: 'post',
  },
  {
    title: '#3 | A Paradigm Shift',
    description: 'The Ascendance of AI in Software and Web Development: A Paradigm Shift',
    body: '',
    date: '2024-03-19',
    slug: 'a-paradigm-shift',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/a-paradigm-shift',
    type: 'post',
  },
  {
    title: '#2 | #buildinpublic',
    description:
      'UNVEILING THE AWESOMENESS OF #BuildingInPublic: A RADICAL APPROACH TO TRANSPARENCY AND CONNECTION',
    body: '',
    date: '2024-01-21',
    slug: 'build-in-public',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/build-in-public',
    type: 'post',
  },
  {
    title: '#1 | Here Goes Nothing',
    description: 'Embarking on a Journey through the Technological Realm',
    body: '',
    date: '2024-01-09',
    slug: 'here-goes-nothing',
    tags: [],
    lastModified: 0,
    isThirdParty: true,
    href: 'https://egxo.fyi/blog/here-goes-nothing',
    type: 'post',
  },
]

export const getPosts = cache(async (includeThirdPartyPosts) => {
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
        const withoutLeadingChars = filePath.substring(2).replace('.mdx', '.md')

        const fetchUrl =
          process.env.NODE_ENV === 'production'
            ? `https://api.github.com/repos/egarrisxn/egxworld-v2/commits?path=${withoutLeadingChars}&page=1&per_page=1`
            : `http://localhost:3000/data/mock-commit-response.json`

        const commitInfoResponse = await fetch(fetchUrl, {
          headers: {
            Authorization: process.env.GITHUB_TOKEN ?? '',
          },
        })
        const commitInfo = await commitInfoResponse.json()
        let lastModified = 0
        if (commitInfo?.length) {
          lastModified = new Date(commitInfo[0].commit.committer.date).getTime()

          if (lastModified - new Date(data.date).getTime() < 24 * 60 * 60 * 1000) {
            lastModified = 0
          }
        }

        return {...data, body: content, lastModified, type: 'post'}
      }),
  )

  const postsWithMetadataAndThirdPartyPosts = [
    ...postsWithMetadata,
    ...(includeThirdPartyPosts ? thirdPartyPosts : []),
  ]

  const filtered = postsWithMetadataAndThirdPartyPosts
    .filter((post) => post !== null)
    .sort((a, b) => (a && b ? new Date(b.date).getTime() - new Date(a.date).getTime() : 0))

  return filtered
})

export async function getPost(slug) {
  const posts = await getPosts()
  return posts.find((post) => post.slug === slug)
}

export default getPosts
