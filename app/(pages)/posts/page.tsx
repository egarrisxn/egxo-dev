import {ThePostsList} from '../../components/posts-list/thepostslist/index'
import Socials from '../../components/socials/index'

export const metadata = {
  title: 'Posts',
  description: 'Posts.',
  alternates: {
    canonical: 'https://egxo.dev/posts',
  },
}

export default async function PostsPage() {
  return (
    <>
      <header>
        <h1>Blog posts _</h1>
      </header>
      <hr />
      <ThePostsList paginate={true} />
      <hr />
      <footer>
        <Socials />
      </footer>
    </>
  )
}
