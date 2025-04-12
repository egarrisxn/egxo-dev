import getThoughts from '@/lib/get-thoughts'
import ThoughtsList from '../index'

export async function TheThoughtsList({paginate}: {paginate: boolean}) {
  const thoughts = await getThoughts()
  return <ThoughtsList thoughts={thoughts} paginate={paginate} />
}
