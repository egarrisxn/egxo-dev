import getPosts from '@/lib/get-posts'
import PostsList from '../index'

export async function ThePostsList({paginate}: {paginate: boolean}) {
  const posts = await getPosts()
  return <PostsList posts={posts} paginate={paginate} />
}
