'use client'

import {useState} from 'react'
import BlockEntry from '../entry/block/index'
import styles from './postslist.module.css'
import type {Post} from '@lib/types'

type Props =
  | {
      posts: Post[]
      paginate?: boolean
    }
  | {
      skeleton: true
    }

export default function PostsList(props: Props) {
  const [showMore, setShowMore] = useState(4)

  if ('skeleton' in props) {
    return (
      <ul className={styles.container}>
        {[...Array(4)].map((_, i) => (
          <BlockEntry key={i} skeleton />
        ))}
      </ul>
    )
  }

  const {posts, paginate} = props

  return (
    <ul className={styles.container}>
      {posts.slice(0, paginate ? showMore : undefined).map((post) => {
        const date = new Date(post.date).toLocaleDateString('en-US', {
          month: 'numeric',
          day: 'numeric',
          year: 'numeric',
        })

        return (
          <BlockEntry
            key={`post-item-${post.slug || Math.random()}`}
            href={post.isThirdParty ? post.href : `/posts/${post.slug}`}
            title={post.title}
            date={new Date(date)}
            isThirdParty={post.isThirdParty}
          />
        )
      })}
      {paginate && showMore < posts.length && (
        <button
          onClick={() => {
            setShowMore(showMore + 4)
          }}
          className={styles.button}
        >
          Show More
        </button>
      )}
    </ul>
  )
}
