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

const Badge = ({href, label, icon, children}) => (
  <TechBadge href={href} label={label} icon={icon}>
    {children || label}
  </TechBadge>
)

export default function TechStack(props) {
  return (
    <p className={styles.myStack} {...props}>
      I build modern web applications using{' '}
      <Badge href='https://typescriptlang.org/' label='TypeScript' icon={<TypeScript />} />,{' '}
      <Badge href='https://nextjs.org' label='Next.js' icon={<Nextjs />} />, and{' '}
      <Badge href='https://reactjs.org' label='React' icon={<React />} />, styled with{' '}
      <Badge href='https://tailwindcss.com' label='Tailwind CSS' icon={<Tailwindcss />} />. For UI
      design, I typically leverage{' '}
      <Badge href='https://ui.shadcn.com' label='shadcn/ui' icon={<Shadcnui />} />, while using{' '}
      <Badge href='https://www.canva.com' label='Canva' icon={<Canva />} /> for all digital asset
      designs. When it comes to content management, I love{' '}
      <Badge href='https://sanity.io' label='Sanity' icon={<Sanity />} /> or{' '}
      <Badge href='https://mdxjs.com' label='MDX' icon={<Mdx />} /> for the job. On the backend, I
      always work with <Badge href='https://nodejs.org' label='Node.js' icon={<Nodejs />} />, paired
      with <Badge href='https://expressjs.com' label='Express' icon={<Express />} /> and{' '}
      <Badge href='https://mongodb.com' label='MongoDB' icon={<MongoDB />} />, or{' '}
      <Badge href='https://supabase.io' label='Supabase' icon={<Supabase />} /> and{' '}
      <Badge href='https://www.postgresql.org' label='PostgreSQL' icon={<PostgreSQL />} />. For auth
      and payments, <Badge href='https://clerk.com' label='Clerk' icon={<Clerk />} /> and{' '}
      <Badge href='https://stripe.com' label='Stripe' icon={<Stripe />} /> are a no-brainer. I use{' '}
      <Badge href='https://zustand.docs.pmnd.rs/' label='Zustand' icon={<Zustand />} /> for state
      management and <Badge href='https://zod.dev' label='Zod' icon={<Zod />} /> for validation.{' '}
      <Badge href='https://pnpm.io' label='pnpm' icon={<Pnpm />} /> takes care of package
      management, <Badge href='#' label='Turbopack' icon={<Turbopack />} /> handles bundling, and{' '}
      <Badge href='https://vercel.com/home' label='Vercel' icon={<Vercel />} /> powers my
      deployments. To maintain code quality and reliability, I use{' '}
      <Badge href='https://eslint.org' label='ESLint' icon={<Eslint />} />,{' '}
      <Badge href='https://prettier.io' label='Prettier' icon={<Prettier />} />, and{' '}
      <Badge href='https://jestjs.io' label='Jest' icon={<Jest />} />. For daily development,{' '}
      <Badge href='https://www.git-scm.com' label='Git' icon={<Git />} /> and{' '}
      <Badge href='https://code.visualstudio.com' label='VS Code' icon={<Vscode />} /> are my go-to
      tools for version control and editing.
    </p>
  )
}
