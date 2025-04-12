import {TechBadge} from '../tech-badge'
import {
  Auth0,
  Canva,
  Eslint,
  Express,
  Git,
  Javascript,
  Jest,
  Mdx,
  MongoDB,
  Nextjs,
  Nodejs,
  Pnpm,
  Postman,
  Prettier,
  Radixui,
  React,
  Sanity,
  Shadcnui,
  Tailwindcss,
  Vercel,
  Vscode,
  Webpack,
  Zod,
  Zustand,
} from '../icons/tech'
import styles from './techstack.module.css'

export default function TechStack(props) {
  return (
    <>
      <p className={styles.myStack} {...props}>
        {` I build dynamic web applications using `}
        <TechBadge
          href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
          label='JavaScript'
          icon={<Javascript />}
        >
          JavaScript
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
        <TechBadge href='https://webpack.js.org' label='Webpack' icon={<Webpack />}>
          Webpack
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
      </p>
    </>
  )
}

// export default function TechStack(props) {
//   return (
//     <>
//       <p className={styles.myStack} {...props}>
//         {` Building dynamic web applications using `}
//         <TechBadge
//           href='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
//           label='JavaScript'
//           icon={<Javascript />}
//         >
//           JavaScript
//         </TechBadge>
//         {`, `}
//         <TechBadge href='https://nextjs.org' label='Next.js' icon={<Nextjs />}>
//           Next.js
//         </TechBadge>
//         {`, and `}
//         <TechBadge href='https://reactjs.com' label='React' icon={<React />}>
//           React
//         </TechBadge>
//         {`, with `}
//         <TechBadge href='https://tailwindcss.com' label='Tailwind CSS' icon={<Tailwindcss />}>
//           Tailwind CSS
//         </TechBadge>
//         {`, `}
//         <TechBadge href='https://www.radix-ui.com' label='Radix UI' icon={<Radixui />}>
//           Radix UI
//         </TechBadge>
//         {`, and `}
//         <TechBadge href='https://ui.shadcn.com' label='shadcn/ui' icon={<Shadcnui />}>
//           Shadcn/ui
//         </TechBadge>
//         {` for crafting accessible UIs. `}
//         <TechBadge href='https://www.canva.com' label='Canva' icon={<Canva />}>
//           Canva
//         </TechBadge>
//         {` is my go-to for design, while `}
//         <TechBadge href='https://sanity.io' label='Sanity' icon={<Sanity />}>
//           Sanity
//         </TechBadge>
//         {` and `}
//         <TechBadge href='https://mdxjs.com' label='MDX' icon={<Mdx />}>
//           MDX
//         </TechBadge>
//         {` manage content. I rely on `}
//         <TechBadge href='https://nodejs.org' label='Node.js' icon={<Nodejs />}>
//           Node.js
//         </TechBadge>
//         {` for server-side logic and `}
//         <TechBadge href='https://pnpm.io' label='pnpm' icon={<Pnpm />}>
//           PNPM
//         </TechBadge>
//         {` for package management. My development setup includes `}
//         <TechBadge href='https://eslint.org' label='ESLint' icon={<Eslint />}>
//           ESLint
//         </TechBadge>
//         {` and `}
//         <TechBadge href='https://prettier.io' label='Prettier' icon={<Prettier />}>
//           Prettier
//         </TechBadge>
//         {` for code quality, `}
//         <TechBadge href='https://webpack.js.org' label='Webpack' icon={<Webpack />}>
//           Webpack
//         </TechBadge>
//         {` for bundling, and `}
//         <TechBadge href='https://vercel.com/home' label='Vercel' icon={<Vercel />}>
//           Vercel
//         </TechBadge>
//         {`  for deployment. `}
//         <TechBadge href='https://www.git-scm.com' label='Git' icon={<Git />}>
//           Git
//         </TechBadge>
//         {` and `}
//         <TechBadge href='https://code.visualstudio.com' label='VS Code' icon={<Vscode />}>
//           VS Code
//         </TechBadge>
//         {` are central to my version control and coding workflows. `}
//         <TechBadge href='https://jestjs.io' label='Jest' icon={<Jest />}>
//           Jest
//         </TechBadge>
//         {` is my go-to choice for code testing, and `}
//         <TechBadge href='https://postman.com' label='Postman' icon={<Postman />}>
//           Postman
//         </TechBadge>
//         {` for all API testing. When it comes to backend frameworks and databases, `}
//         <TechBadge href='https://expressjs.com' label='Express' icon={<Express />}>
//           Express
//         </TechBadge>
//         {` paired with  `}
//         <TechBadge href='https://mongodb.com' label='MongoDB' icon={<MongoDB />}>
//           MongoDB
//         </TechBadge>
//         {` is the way. When payment processing is needed, `}
//         <TechBadge href='https://stripe.com' label='Stripe' icon={<MongoDB />}>
//           Stripe
//         </TechBadge>
//         {` is a no-brainer. For state management and schema validation, `}
//         <TechBadge href='https://zustand.docs.pmnd.rs/' label='Zustand' icon={<Zustand />}>
//           Zustand
//         </TechBadge>
//         {` and `}
//         <TechBadge href='https://zod.dev' label='Zod' icon={<Zod />}>
//           Zod
//         </TechBadge>
//         {` work great for me. `}
//       </p>
//     </>
//   )
// }
