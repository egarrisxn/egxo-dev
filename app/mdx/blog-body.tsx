import {MDXRemote} from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkToc from 'remark-toc'
import {mdxComponents} from './components'

export function BlogBody({children}: {children: string}) {
  return (
    <MDXRemote
      source={children}
      options={{
        mdxOptions: {
          remarkPlugins: [
            remarkGfm,
            remarkFrontmatter,
            [
              remarkToc,
              {
                tight: true,
                maxDepth: 5,
              },
            ],
          ],
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
        },
      }}
      components={mdxComponents}
    />
  )
}
