export type Base = {
  title: string
  description: string
  href?: string
}

export type Post = Base & {
  date: string
  slug: string | undefined
  tags: string[]
  body?: string
  lastModified?: number
  isThirdParty?: boolean
  type: 'post'
}

export type Project = Base & {
  website?: string
  years?: string[]
  stars?: number
  image?: string
  type: 'project'
}

export type Thought = Base & {
  date: string
  slug: string
  body: string
  lastModified?: number
  type: 'thought'
}
