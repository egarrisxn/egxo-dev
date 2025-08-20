import { promises as fs } from 'fs'
import path from 'path'

const SITE_URL = 'https://egxo.dev'

async function getPostsSlugs(dir: string) {
  const entries = await fs.readdir(dir, {
    recursive: true,
    withFileTypes: true,
  })
  return entries
    .filter((entry) => entry.isFile() && entry.name === 'page.mdx')
    .map((entry) => {
      const relativePath = path.relative(
        dir,
        path.join(entry.parentPath, entry.name),
      )
      return path.dirname(relativePath)
    })
    .map((slug) => slug.replace(/\\/g, '/'))
}

export default async function sitemap() {
  const postsDirectory = path.join(process.cwd(), 'app', '(pages)', 'blog')
  const slugs = await getPostsSlugs(postsDirectory)

  const posts = slugs.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date().toISOString(),
  }))

  const routes = ['', '/about', '/contact', '/posts', '/projects'].map(
    (route) => ({
      url: `${SITE_URL}${route}`,
      lastModified: new Date().toISOString(),
    }),
  )

  return [...routes, ...posts]
}
