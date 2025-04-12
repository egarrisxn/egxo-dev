import {TheThoughtsList} from '@/components/thoughts-list/thethoughtslist'
import Socials from '@/components/socials'

export const metadata = {
  title: 'Thoughts',
  description: 'Random thoughts that I have.',
  alternates: {
    canonical: 'https://egxo.dev/thoughts',
  },
}

export default async function ThoughtsPage() {
  return (
    <>
      <header>
        <h1>Random thoughts _</h1>
      </header>
      <hr />
      <TheThoughtsList paginate={true} />
      <hr />
      <footer>
        <Socials />
      </footer>
    </>
  )
}
