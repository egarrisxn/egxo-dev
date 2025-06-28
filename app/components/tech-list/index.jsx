import styles from './techlist.module.css'

export default function TechList() {
  return (
    <>
      <ul className={styles.techList}>
        <li>
          <span>Frontend:</span> Astro, jQuery
        </li>
        <li>
          <span>Backend:</span> Hono
        </li>
        <li>
          <span>CSS & UI Libraries:</span> Bootstrap, daisyUI
        </li>
        <li>
          <span>Runtimes:</span> Deno
        </li>
        <li>
          <span>Bundlers:</span> Webpack
        </li>
        <li>
          <span>Databases & ORM:</span> MySQL, Prisma
        </li>
        <li>
          <span>Package Managers:</span> npm
        </li>
        <li>
          <span>Testing:</span> Postman, Vitest
        </li>
        <li>
          <span>Authentication:</span> Auth0, Auth.js
        </li>
        <li>
          <span>Deployment & Hosting:</span> Heroku, Netlify
        </li>
        <li>
          <span>Build & Design Tools:</span> Adobe Suite, Vite
        </li>
      </ul>
    </>
  )
}
