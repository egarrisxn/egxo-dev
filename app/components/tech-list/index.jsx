import styles from './techlist.module.css'

export default function TechList() {
  return (
    <>
      <ul className={styles.techList}>
        <li>
          <span>Frontend:</span> Angular, Astro, jQuery
        </li>
        <li>
          <span>Backend:</span> Hono
        </li>
        <li>
          <span>CSS & UI Libraries:</span> Bootstrap, React Aria, daisyUI
        </li>
        <li>
          <span>Runtimes:</span> Deno
        </li>
        <li>
          <span>Bundlers:</span> Webpack
        </li>
        <li>
          <span>Databases & ORM:</span> MySQL, Prisma, Sequelize
        </li>
        <li>
          <span>Package Managers:</span> npm
        </li>
        <li>
          <span>Templating:</span> Pug, Handlebars
        </li>
        <li>
          <span>Testing:</span> Vitest
        </li>
        <li>
          <span>Authentication:</span> Auth.js
        </li>
        <li>
          <span>Deployment & Hosting:</span> Netlify, Heroku, AWS
        </li>
        <li>
          <span>Build & Design Tools:</span> Vite, Adobe Suite
        </li>
      </ul>
    </>
  )
}
