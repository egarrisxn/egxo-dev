import {TechBadge} from '../tech-badge'
import {
  Auth0,
  Canva,
  Eslint,
  Express,
  Git,
  Jest,
  Markdown,
  Mdx,
  MongoDB,
  Nextjs,
  Nodejs,
  Pnpm,
  PostgreSQL,
  Postman,
  Prettier,
  Radixui,
  React,
  Sanity,
  Shadcnui,
  Stripe,
  Supabase,
  Tailwindcss,
  TypeScript,
  Vercel,
  Vscode,
  Turbopack,
  Zod,
  Zustand,
} from '../icons/tech'
import styles from './techstack.module.css'

export default function TechStack(props) {
  return (
    <>
      <p className={styles.myStack} {...props}>
        {`I craft modern web applications using `}
        <TechBadge href='https://typescriptlang.org/' label='TypeScript' icon={<TypeScript />}>
          TypeScript
        </TechBadge>
        {`, `}
        <TechBadge href='https://nextjs.org' label='Next.js' icon={<Nextjs />}>
          Next.js
        </TechBadge>
        {`, and `}
        <TechBadge href='https://reactjs.com' label='React' icon={<React />}>
          React
        </TechBadge>
        {`, styled with `}
        <TechBadge href='https://tailwindcss.com' label='Tailwind CSS' icon={<Tailwindcss />}>
          Tailwind CSS
        </TechBadge>
        {`, `}
        <TechBadge href='https://www.radix-ui.com' label='Radix UI' icon={<Radixui />}>
          Radix UI
        </TechBadge>
        {`, and `}
        <TechBadge href='https://ui.shadcn.com' label='shadcn/ui' icon={<Shadcnui />}>
          shadcn/ui
        </TechBadge>
        {`. For design assets, I use `}
        <TechBadge href='https://www.canva.com' label='Canva' icon={<Canva />}>
          Canva
        </TechBadge>
        {`, and manage content with `}
        <TechBadge href='https://sanity.io' label='Sanity' icon={<Sanity />}>
          Sanity
        </TechBadge>
        {`, `}
        <TechBadge href='https://www.markdownguide.org/' label='Markdown' icon={<Markdown />}>
          Markdown
        </TechBadge>
        {`, and `}
        <TechBadge href='https://mdxjs.com' label='MDX' icon={<Mdx />}>
          MDX
        </TechBadge>
        {`. On the backend, I work with `}
        <TechBadge href='https://nodejs.org' label='Node.js' icon={<Nodejs />}>
          Node.js
        </TechBadge>
        {`, `}
        <TechBadge href='https://expressjs.com' label='Express' icon={<Express />}>
          Express
        </TechBadge>
        {`, `}
        <TechBadge href='https://supabase.io' label='Supabase' icon={<Supabase />}>
          Supabase
        </TechBadge>
        {`, and databases like `}
        <TechBadge href='https://www.postgresql.org' label='PostgreSQL' icon={<PostgreSQL />}>
          PostgreSQL
        </TechBadge>
        {` and `}
        <TechBadge href='https://mongodb.com' label='MongoDB' icon={<MongoDB />}>
          MongoDB
        </TechBadge>
        {`. `}
        <TechBadge href='https://stripe.com' label='Stripe' icon={<Stripe />}>
          Stripe
        </TechBadge>
        {` powers payment processing, while `}
        <TechBadge href='https://zustand.docs.pmnd.rs/' label='Zustand' icon={<Zustand />}>
          Zustand
        </TechBadge>
        {` and `}
        <TechBadge href='https://zod.dev' label='Zod' icon={<Zod />}>
          Zod
        </TechBadge>
        {` handle state and validation. `}
        <TechBadge href='https://pnpm.io' label='pnpm' icon={<Pnpm />}>
          PNPM
        </TechBadge>
        {` manages packages, with `}
        <TechBadge href='#' label='Turbopack' icon={<Turbopack />}>
          Turbopack
        </TechBadge>
        {` handling bundling, and `}
        <TechBadge href='https://vercel.com/home' label='Vercel' icon={<Vercel />}>
          Vercel
        </TechBadge>
        {` handling deployment. For quality and testing, I use `}
        <TechBadge href='https://eslint.org' label='ESLint' icon={<Eslint />}>
          ESLint
        </TechBadge>
        {`, `}
        <TechBadge href='https://prettier.io' label='Prettier' icon={<Prettier />}>
          Prettier
        </TechBadge>
        {`, `}
        <TechBadge href='https://jestjs.io' label='Jest' icon={<Jest />}>
          Jest
        </TechBadge>
        {`, and `}
        <TechBadge href='https://postman.com' label='Postman' icon={<Postman />}>
          Postman
        </TechBadge>
        {`. Day to day, I rely on `}
        <TechBadge href='https://www.git-scm.com' label='Git' icon={<Git />}>
          Git
        </TechBadge>
        {`, `}
        <TechBadge href='https://code.visualstudio.com' label='VS Code' icon={<Vscode />}>
          VS Code
        </TechBadge>
        {`, and `}
        <TechBadge href='https://auth0.com' label='Auth0' icon={<Auth0 />}>
          Auth0
        </TechBadge>
        {` for authentication.`}
      </p>
      {/* <p className={styles.myStack} {...props}>
        {` I build dynamic web applications using `}
        <TechBadge href='https://typescriptlang.org/' label='TypeScript' icon={<TypeScript />}>
          TypeScript
        </TechBadge>
        {`, `}
        <TechBadge href='https://nextjs.org' label='Next.js' icon={<Nextjs />}>
          Next.js
        </TechBadge>
        {`, and `}
        <TechBadge href='https://reactjs.com' label='React' icon={<React />}>
          React
        </TechBadge>
        {`, styled with `}
        <TechBadge href='https://tailwindcss.com' label='Tailwind CSS' icon={<Tailwindcss />}>
          Tailwind CSS
        </TechBadge>
        {`, `}
        <TechBadge href='https://www.radix-ui.com' label='Radix UI' icon={<Radixui />}>
          Radix UI
        </TechBadge>
        {`, and `}
        <TechBadge href='https://ui.shadcn.com' label='shadcn/ui' icon={<Shadcnui />}>
          shadcn/ui
        </TechBadge>
        {`. I use `}
        <TechBadge href='https://www.canva.com' label='Canva' icon={<Canva />}>
          Canva
        </TechBadge>
        {` for design, and manage content with `}
        <TechBadge href='https://sanity.io' label='Sanity' icon={<Sanity />}>
          Sanity
        </TechBadge>
        {` and `}
        <TechBadge href='https://www.markdownguide.org/' label='Markdown' icon={<Markdown />}>
          Markdown
        </TechBadge>
        {` or `}
        <TechBadge href='https://mdxjs.com' label='MDX' icon={<Mdx />}>
          MDX
        </TechBadge>
        {`. My server-side work is powered by `}
        <TechBadge href='https://nodejs.org' label='Node.js' icon={<Nodejs />}>
          Node.js
        </TechBadge>
        {`, with `}
        <TechBadge href='https://pnpm.io' label='pnpm' icon={<Pnpm />}>
          PNPM
        </TechBadge>
        {` for package management. For code quality, I rely on `}
        <TechBadge href='https://eslint.org' label='ESLint' icon={<Eslint />}>
          ESLint
        </TechBadge>
        {` and `}
        <TechBadge href='https://prettier.io' label='Prettier' icon={<Prettier />}>
          Prettier
        </TechBadge>
        {`. Bundling is handled by `}
        <TechBadge href='#' label='Turbopack' icon={<Turbopack />}>
          Turbopack
        </TechBadge>
        {`, and deployment by `}
        <TechBadge href='https://vercel.com/home' label='Vercel' icon={<Vercel />}>
          Vercel
        </TechBadge>
        {`. `}
        <TechBadge href='https://www.git-scm.com' label='Git' icon={<Git />}>
          Git
        </TechBadge>
        {` and `}
        <TechBadge href='https://code.visualstudio.com' label='VS Code' icon={<Vscode />}>
          VS Code
        </TechBadge>
        {` are essential to my version control and coding workflow. For testing, I use `}
        <TechBadge href='https://jestjs.io' label='Jest' icon={<Jest />}>
          Jest
        </TechBadge>
        {`, with `}
        <TechBadge href='https://postman.com' label='Postman' icon={<Postman />}>
          Postman
        </TechBadge>
        {` for API testing. In the backend, I prefer `}
        <TechBadge href='#' label='Supabase' icon={<Supabase />}>
          Supabase
        </TechBadge>
        {` and `}
        <TechBadge href='#' label='PostgreSQL' icon={<PostgreSQL />}>
          PostgreSQL
        </TechBadge>
        {` or `}
        <TechBadge href='https://expressjs.com' label='Express' icon={<Express />}>
          Express
        </TechBadge>
        {` and `}
        <TechBadge href='https://mongodb.com' label='MongoDB' icon={<MongoDB />}>
          MongoDB
        </TechBadge>
        {` for data management, while `}
        <TechBadge href='https://stripe.com' label='Stripe' icon={<MongoDB />}>
          Stripe
        </TechBadge>
        {` handles payment processing. For state management, `}
        <TechBadge href='https://zustand.docs.pmnd.rs/' label='Zustand' icon={<Zustand />}>
          Zustand
        </TechBadge>
        {` and `}
        <TechBadge href='https://zod.dev' label='Zod' icon={<Zod />}>
          Zod
        </TechBadge>
        {` streamline app data management and validation. Lastly, `}
        <TechBadge href='https://auth0.com' label='Auth0' icon={<Auth0 />}>
          Auth0
        </TechBadge>
        {` makes authentication and authorization incredibly easy.`}
      </p> */}
    </>
  )
}
