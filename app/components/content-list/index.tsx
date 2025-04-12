import {Suspense} from 'react'
import getThoughts from '@/lib/get-thoughts'
import getPosts from '@/lib/get-posts'
import FilterableList from '../filterable-list'
import {getTag, renderItem} from './render'

export async function ContentList() {
  const [posts, thoughts] = await Promise.all([getPosts(true), getThoughts()])

  const content = [...posts, ...thoughts].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return (
    <>
      {/* Suspense for useSearchParams */}
      <Suspense fallback={null}>
        <FilterableList
          items={content}
          renderItem={renderItem}
          tags={getTag}
          enableSearch={true}
          enableTags={true}
        />
      </Suspense>
    </>
  )
}
