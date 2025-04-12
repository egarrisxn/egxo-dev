import {Metadata} from 'next'
import {JSX} from 'react'
import getThoughts from '../../../lib/get-thoughts'
import ContentFooter from '../../../components/content-footer/footer'
import Navigation from '../../../components/content-footer/navigation'
import styles from '../../thoughts/[slug]/thoughtslayout.module.css'

export async function generateStaticParams() {
  const thoughts = await getThoughts()
  return thoughts.map((thought) => ({slug: thought.slug}))
}

export const generateMetadata = async (props: {
  params: Promise<{
    slug: string
  }>
}): Promise<Metadata> => {
  const params = await props.params
  const thought = (await getThoughts()).find((p) => p?.slug === params.slug)

  return {
    title: thought?.title || 'Default Title',
    description: thought?.description || 'Default Description',
    alternates: {
      canonical: `https://egxo.dev/thoughts/${params.slug}`,
    },
  }
}

async function getData({slug}: {slug: string}) {
  const thoughts = await getThoughts()
  const thoughtIndex = thoughts.findIndex((p) => p?.slug === slug)

  if (thoughtIndex === -1) {
    throw new Error(`${slug} not found in thoughts. Did you forget to rename the file?`)
  }

  const thought = thoughts[thoughtIndex]

  return {
    previous: thoughts[thoughtIndex + 1] || null,
    next: thoughts[thoughtIndex - 1] || null,
    ...thought,
  }
}

export default async function ThoughtSlugLayout(props: {
  children: JSX.Element
  params: Promise<{
    slug: string
  }>
}) {
  const params = await props.params

  const {children} = props
  const {previous, next, title, date} = await getData(params)

  return (
    <>
      <div className={styles.wrapper}>
        <span className={styles.date}>{date}</span>
      </div>
      <article>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </article>
      <ContentFooter />
      <Navigation previous={previous} next={next} />
    </>
  )
}
