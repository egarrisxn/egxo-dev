export type Base = {
  title: string
  description: string
  href?: string
}

export type Post = Base & {
  // Not defined for third party posts
  slug: string | undefined
  date: string
  tags: string[]
  body: string
  lastModified?: number
  views?: number
  // Third party only
  isThirdParty?: boolean
  type: 'post'
}

export type Project = Base & {
  role?: string
  website?: string
  years?: string[]
  stars?: number
  image?: string
  type: 'project'
}

export type Thought = Base & {
  date: string
  body: string
  slug: string
  type: 'thought'
}
