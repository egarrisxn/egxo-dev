import Image from 'next/image'
import Link from '@/components/link'
import {getProjects} from '@/lib/get-projects'
import {SpotifyNowPlaying} from '@/components/spotify'
import {ContentList} from '@/components/content-list'
import TimeOfDay from '@/components/timer'
import Socials from '@/components/socials'
import ProjectList from '@/components/projects'
import styles from './page.module.css'

const PROJECT_COUNT = 4

export default async function HomePage() {
  const projects = await getProjects()
  return (
    <>
      <header className={styles.header}>
        <TimeOfDay />
        <nav>
          <Link href='/about' title='About Page' external={false}>
            about
          </Link>
          |
          <Link href='/projects' title='Projects Page' external={false}>
            projects
          </Link>
          |<Link href='/posts'>posts</Link>|<Link href='/thoughts'>thoughts</Link>|
          <Link href='/contact'>contact</Link>|
          <Link external href='https://egxworld.vercel.app'>
            v1
          </Link>
        </nav>
        <h2>
          Full Stack Developer & Digital Product Designer building thoughtful tools for the web and
          the world. Taking it one step at a time, guided by a Positive Mental Attitude (PMA).{' '}
          <Link href='/about'>Learn more </Link>about me and my world!
        </h2>
        <h3>
          Available for work //{' '}
          <a href='/other/EG-US-RESUME-2025.pdf' download>
            Resume
          </a>
        </h3>
        <SpotifyNowPlaying />
      </header>
      <section className={styles.projects}>
        <div style={{position: 'relative'}}>
          <Image
            src='/design/purplelines.svg'
            alt='Purple Lines'
            width={110}
            height={75}
            style={{position: 'absolute'}}
          />
          <h4>Projects</h4>
        </div>
        <ProjectList showYears={true} projects={projects.slice(0, PROJECT_COUNT)} seeMore={true} />
      </section>
      <section>
        <div className={styles.postandnotes}>
          <div style={{position: 'relative'}}>
            <Image
              src='/design/yellowlines.svg'
              alt='Yellow Lines'
              width={80}
              height={130}
              style={{position: 'absolute'}}
            />
            <h4>Posts&</h4>
          </div>
          <div style={{position: 'relative'}}>
            <Image
              src='/design/redlines.svg'
              alt='Red Lines'
              width={125}
              height={130}
              style={{position: 'absolute'}}
            />
            <h4>Thoughts</h4>
          </div>
        </div>
        <ContentList />
      </section>
      <hr />
      <footer>
        <Socials />
      </footer>
    </>
  )
}
