import Image from 'next/image'
import Link from '@/components/link'
import TechStack from '@/components/tech-stack'
import TechList from '@/components/tech-list'
import Socials from '@/components/socials'
import {Arrow} from '@/components/icons/other'
import styles from './about.module.css'

export const metadata = {
  title: 'About',
  description: 'A little bit about me',
  alternates: {
    canonical: 'https://egxo.dev/about',
  },
}

export default function AboutPage() {
  const holyTrinity = [
    {name: 'HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'},
    {name: 'CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'},
    {name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'},
  ]

  const futureTech = [
    {name: 'Docker', url: 'https://www.docker.com/'},
    {name: 'Python', url: 'https://www.python.org/'},
  ]

  return (
    <>
      <header className={styles.header}>
        <Image
          src='/images/myavatar.png'
          alt='My personal photo'
          width={100}
          height={100}
          quality={100}
          className={styles.avatar}
        />
        <div className={styles.heading}>
          <h1>Ethan G.</h1>
          <h2>Developer | Designer</h2>
        </div>
      </header>

      <hr />

      <article>
        <h3>Who am I?</h3>
        <p>
          Hey there! I&apos;m Ethan, a Full Stack Developer and Digital Product Designer who loves
          building modern, user-centered web apps that prioritize performance, accessibility, and
          clean design.
        </p>
        <p>
          I work across the stack, blending front-end finesse with back-end logic. Whether it&apos;s
          crafting seamless interfaces or architecting scalable systems, I aim to deliver polished,
          purposeful experiences.
        </p>
        <p>
          I&apos;m always exploring new tools and technologies that move the web forward. Offline,
          you&apos;ll find me experimenting with creative projects or geeking out over tech history.
        </p>
        <p>
          If you&apos;re into thoughtful software and digital craft, we&apos;ll probably get along
          just fine.
        </p>

        <hr />

        <h3>Current Tech Stack</h3>
        <TechStack />
        <p className={styles.tech}>
          {'Shoutout to the holy trinity of web development: '}
          {holyTrinity.map((tech, index) => (
            <span key={tech.name}>
              <Link href={tech.url} external className={styles.techLink}>
                {tech.name}
              </Link>
              {index < holyTrinity.length - 2 ? ', ' : ''}
              {index === holyTrinity.length - 2 ? ', and ' : ''}
              {index === holyTrinity.length - 1 ? '!' : ''}
            </span>
          ))}
        </p>

        <hr />

        <h3>Previous Technologies and Tools:</h3>
        <TechList />
        <p className={styles.tech}>
          {'Future curiousities include: '}
          {futureTech.map((tech, index) => (
            <span key={tech.name}>
              <Link href={tech.url} external className={styles.techLink}>
                {tech.name}
              </Link>
              {index < futureTech.length - 2 ? ', ' : ''}
              {index === futureTech.length - 2 ? ', ' : ''}
              {index === futureTech.length - 1 ? ', and more in the AI space!' : ''}
            </span>
          ))}
        </p>

        <hr />

        <p>
          A glimpse into the{' '}
          <Link external href='https://egxworld.vercel.app'>
            past <Arrow />
          </Link>
        </p>
      </article>

      <hr />

      <footer>
        <Socials />
      </footer>
    </>
  )
}
