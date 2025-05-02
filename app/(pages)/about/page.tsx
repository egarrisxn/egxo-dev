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
    {name: 'SQLite', url: 'https://www.sqlite.org/'},
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
          <h2>Developer. Designer.</h2>
        </div>
      </header>
      <hr />
      <article>
        <h3>Who Am I?</h3>
        <p>
          Hey there!, I&apos;m Ethan, a developer and designer with a deep appreciation for clean
          code and thoughtful design. I build modern, user-focused web apps that prioritize
          usability, performance, and accessibility.
        </p>
        <p>
          With a background that bridges both front-end polish and back-end logic, I enjoy taking
          ideas from concept to launch. Whether it&apos;s crafting intuitive interfaces or
          architecting scalable systems, I&apos;m all about delivering work that feels purposeful
          and refined.
        </p>
        <p>
          I stay curious, keep up with emerging technologies, and love exploring new tools that push
          the web forward. Outside of the screen, I&apos;m probably tinkering with creative projects
          or digging into a good piece of tech history.
        </p>
        <p>
          If you&apos;re into thoughtful software and great digital experiences, we&apos;ll probably
          get along just fine.
        </p>

        <hr />
        <h3>My Tech Stack:</h3>
        <TechStack />
        <p className={styles.tech}>
          {'Shoutout to the holy trinity of web development: '}
          {holyTrinity.map((tech, index) => (
            <span key={tech.name}>
              <Link href={tech.url} external className={styles.techLink}>
                {tech.name}
              </Link>
              {index < holyTrinity.length - 2 ? ', ' : ''}
              {index === holyTrinity.length - 2 ? ', & ' : ''}
              {index === holyTrinity.length - 1 ? '!' : ''}
            </span>
          ))}
        </p>
        <hr />
        <h3>Previously Used Technologies & Tools:</h3>
        <TechList />
        <p className={styles.tech}>
          {` Interests for Future Learning: `}
          {futureTech.map((tech, index) => (
            <span key={tech.name}>
              <Link href={tech.url} external className={styles.techLink}>
                {tech.name}
              </Link>
              {index < futureTech.length - 2 ? ', ' : ''}
              {index === futureTech.length - 2 ? ', ' : ''}
              {index === futureTech.length - 1 ? ', & all things AI!' : ''}
            </span>
          ))}
        </p>
        <hr />
        <p>
          {' '}
          A glipse at the{' '}
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
