import {notFound} from 'next/navigation'
import getPosts, {getPost} from '@/lib/get-posts'
import {BlogBody} from '@/mdx/blog-body'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({slug: post.slug}))
}

export default async function PostSlugPage(props: {
  params: Promise<{
    slug: string
  }>
}) {
  const params = await props.params
  const post = await getPost(params.slug)
  if (!post) return notFound()

  return <BlogBody>{String(post?.body)}</BlogBody>
}
