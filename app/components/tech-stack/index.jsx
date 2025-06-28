import {TechBadge} from '../tech-badge'
import {
  Canva,
  Clerk,
  Eslint,
  Express,
  Git,
  Jest,
  Mdx,
  MongoDB,
  Nextjs,
  Nodejs,
  Pnpm,
  PostgreSQL,
  Prettier,
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
        {`I build modern web applications using `}
        <TechBadge href='https://typescriptlang.org/' label='TypeScript' icon={<TypeScript />}>
          TypeScript
        </TechBadge>
        {`, `}
        <TechBadge href='https://nextjs.org' label='Next.js' icon={<Nextjs />}>
          Next.js
        </TechBadge>
        {`, and `}
        <TechBadge href='https://reactjs.org' label='React' icon={<React />}>
          React
        </TechBadge>
        {`, styled with `}
        <TechBadge href='https://tailwindcss.com' label='Tailwind CSS' icon={<Tailwindcss />}>
          Tailwind CSS
        </TechBadge>
        {` and `}
        <TechBadge href='https://ui.shadcn.com' label='shadcn/ui' icon={<Shadcnui />}>
          shadcn/ui
        </TechBadge>
        {`. For design assets, I often turn to `}
        <TechBadge href='https://www.canva.com' label='Canva' icon={<Canva />}>
          Canva
        </TechBadge>
        {`, and for content management, I use `}
        <TechBadge href='https://sanity.io' label='Sanity' icon={<Sanity />}>
          Sanity
        </TechBadge>
        {` or `}
        <TechBadge href='https://mdxjs.com' label='MDX' icon={<Mdx />}>
          MDX
        </TechBadge>
        {`. On the backend, I typically work with `}
        <TechBadge href='https://nodejs.org' label='Node.js' icon={<Nodejs />}>
          Node.js
        </TechBadge>
        {`, paired with `}
        <TechBadge href='https://expressjs.com' label='Express' icon={<Express />}>
          Express
        </TechBadge>
        {` and databases like `}
        <TechBadge href='https://mongodb.com' label='MongoDB' icon={<MongoDB />}>
          MongoDB
        </TechBadge>
        {` or `}
        <TechBadge href='https://supabase.io' label='Supabase' icon={<Supabase />}>
          Supabase
        </TechBadge>
        {` with `}
        <TechBadge href='https://www.postgresql.org' label='PostgreSQL' icon={<PostgreSQL />}>
          PostgreSQL
        </TechBadge>
        {`. For authentication, I rely on `}
        <TechBadge href='https://clerk.com' label='Clerk' icon={<Clerk />}>
          Clerk
        </TechBadge>
        {`, and for payments, `}
        <TechBadge href='https://stripe.com' label='Stripe' icon={<Stripe />}>
          Stripe
        </TechBadge>
        {`. I use `}
        <TechBadge href='https://zustand.docs.pmnd.rs/' label='Zustand' icon={<Zustand />}>
          Zustand
        </TechBadge>
        {` for state management and `}
        <TechBadge href='https://zod.dev' label='Zod' icon={<Zod />}>
          Zod
        </TechBadge>
        {` for validation. `}
        <TechBadge href='https://pnpm.io' label='pnpm' icon={<Pnpm />}>
          PNPM
        </TechBadge>
        {` handles package management, `}
        <TechBadge href='#' label='Turbopack' icon={<Turbopack />}>
          Turbopack
        </TechBadge>
        {` handles bundling, and `}
        <TechBadge href='https://vercel.com/home' label='Vercel' icon={<Vercel />}>
          Vercel
        </TechBadge>
        {` handles deployments. For code quality and testing, I use `}
        <TechBadge href='https://eslint.org' label='ESLint' icon={<Eslint />}>
          ESLint
        </TechBadge>
        {`, `}
        <TechBadge href='https://prettier.io' label='Prettier' icon={<Prettier />}>
          Prettier
        </TechBadge>
        {`, and `}
        <TechBadge href='https://jestjs.io' label='Jest' icon={<Jest />}>
          Jest
        </TechBadge>
        {`. Finally, in my day-to-day development, I depend on `}
        <TechBadge href='https://www.git-scm.com' label='Git' icon={<Git />}>
          Git
        </TechBadge>
        {` and `}
        <TechBadge href='https://code.visualstudio.com' label='VS Code' icon={<Vscode />}>
          VS Code
        </TechBadge>
        {` to keep everything moving smoothly.`}
      </p>
    </>
  )
}
