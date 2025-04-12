'use client'

import {useState} from 'react'
import BlockEntry from '../entry/block/index'
import styles from './thoughtslist.module.css'
import type {Thought} from '@/lib/types'

type Props =
  | {
      thoughts: Thought[]
      paginate?: boolean
    }
  | {
      skeleton: true
    }

export default function ThoughtsList(props: Props) {
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

  const {thoughts, paginate} = props

  return (
    <ul className={styles.container}>
      {thoughts.slice(0, paginate ? showMore : undefined).map((thought) => {
        const date = new Date(thought.date).toLocaleDateString('en-US', {
          month: 'numeric',
          day: 'numeric',
          year: 'numeric',
        })

        return (
          <BlockEntry
            key={`thought-item-${thought.slug || Math.random()}`}
            href={`/thoughts/${thought.slug}`}
            title={thought.title}
            date={new Date(date)}
            description={thought.description}
          />
        )
      })}
      {paginate && showMore < thoughts.length && (
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
