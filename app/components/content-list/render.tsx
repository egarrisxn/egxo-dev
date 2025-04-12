'use client'

import BlockEntry from '../entry/block'
import {Thought, Post} from '@/lib/types'

export const renderItem = (item: Post | Thought) =>
  item.type === 'post' ? renderPost(item) : renderThought(item)

export const getTag = (post: Post | Thought) => [post.type === 'post' ? 'post' : 'thought']

function renderPost(post: Post) {
  return (
    <BlockEntry
      key={post.slug || post.href}
      href={post.isThirdParty ? post.href : `/posts/${post.slug}`}
      title={post.title}
      date={new Date(post.date)}
      description={post.description}
      isThirdParty={post.isThirdParty}
      type={post.type || 'post'}
    />
  )
}

function renderThought(thought: Thought) {
  return (
    <BlockEntry
      key={thought.slug}
      href={`/thoughts/${thought.slug}`}
      title={thought.title}
      date={new Date(thought.date)}
      description={thought.description}
      type={thought.type || 'thought'}
    />
  )
}
