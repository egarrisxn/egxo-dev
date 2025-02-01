import {cache} from 'react'

const Projects = [
  {
    title: 'xprod',
    description:
      'An all-in-one productivity web application to help keep your days in order! Spun up with Next.js, Supabase, TypeScript, Tailwind CSS, zod, & deployed with Vercel.',
    href: 'https://github.com/egarrisxn/xprod',
    years: ['2025'],
    type: 'project',
    image: '/projects/xprod.png',
  },
  {
    title: 'CC NextFolio',
    description:
      'A super sleek and clean website template just for you! Put together with Next.js, Content Collections, TypeScript, Tailwind CSS, zustand, & deployed with Vercel.',
    href: 'https://github.com/egarrisxn/cc-nextfolio',
    years: ['2025'],
    type: 'project',
    image: '/projects/ccnextfolio.png',
  },
  {
    title: 'International Worldwide',
    description:
      'A multilingual and multi-themed platform featuring coding practice questions across various topics. Built with Next.js, Next-Intl, JavaScript, Tailwind CSS, & deployed with Vercel.',
    href: 'https://github.com/egarrisxn/international-worldwide',
    years: ['2024', '2025'],
    type: 'project',
    image: '/projects/internationalworldwide.png',
  },
  {
    title: 'Unofficial Merchandise',
    description:
      'A fully functional e-commerce store built with users in mind! Leveraging modern web teb technologies like Next.js,Stripe, Sanity, JavaScript, Tailwind CSS, & deployed with Vercel.',
    href: 'https://github.com/egarrisxn/unofficial-merchandise',
    years: ['2024'],
    type: 'project',
    image: '/projects/unofficialmerch.png',
  },
  {
    title: 'n00bdev - Tips & Tricks',
    description:
      'A cutting-edge, server-side rendered blog designed by developers, for developers. Built with the Astro Framework, TypeScript, Tailwind CSS, & deployed with Vercel.',
    href: 'https://github.com/egarrisxn/n00bdev',
    years: ['2024'],
    type: 'project',
    image: '/projects/n00bdev.png',
  },
  {
    title: 'Sway Bae Official',
    description:
      'The place to be for full-time streamer and content creator, Sway Bae. Created using Next.js, Sanity, JavaScript, Tailwind CSS, daisyUI, & deployed with Vercel.',
    href: 'https://github.com/egarrisxn/swaybaeofficial',
    years: ['2024'],
    type: 'project',
    image: '/projects/swaybaeofficial.png',
  },
  {
    title: 'EGXWORLD v1',
    description:
      'My first portfolio / website / whatever you would like to call it. Powered by Next.js, JavaScript, Tailwind CSS, shadcn/ui, & deployed with Vercel.',
    href: 'https://github.com/egarrisxn/egxworld-v1',
    years: ['2024'],
    type: 'project',
    image: '/projects/egxworldv1.png',
  },
  {
    title: 'Resbuilder: ATS Resumes',
    description:
      'A simple and professional ATS friendly resume template and more using the likes of Next.js, JavaScript, MDX, Tailwind CSS, & deployed with Vercel.',
    href: 'https://github.com/egarrisxn/ats-resbuilder',
    years: ['2024'],
    type: 'project',
    image: '/projects/resumebuilder.png',
  },
  {
    title: 'egxo.fyi',
    description:
      'My personal blog I created as an attempt to write a little more. Spun up by the new Next.js, Sanity, JavaScript, Tailwind CSS, shadcn/ui, & deployed with Vercel.',
    href: 'https://github.com/egarrisxn/egxo-fyi',
    years: ['2024'],
    type: 'project',
    image: '/projects/egxblog.png',
  },
  {
    title: 'WebSanity: Website Builder',
    description:
      'A powerful, user-friendly tool designed to help you create stunning websites effortlessly! Powered by Next.js, Sanity, JavaScript, Tailwind CSS, & deployed with Vercel.',
    href: 'https://github.com/egarrisxn/websanity-builder',
    years: ['2024'],
    type: 'project',
    image: '/projects/websanity.png',
  },
  {
    title: 'EZCOPY BUTTONS',
    description:
      'A nice and simple gallery of copy-and-paste buttons for seamless use. Built with Next.js, JavaScript, Tailwind CSS, & deployed with Vercel.',
    href: 'https://github.com/egarrisxn/ezcopy-buttons',
    years: ['2024'],
    type: 'project',
    image: '/projects/ezcopy.png',
  },
  {
    title: 'DevBuild: Resume Builder',
    description:
      'An aestheticlly pleasing (not ATS compliant) resume template using the powers that are Next.js, Typescript, Tailwind CSS, Material-Tailwind, & deployed with Vercel.',
    href: 'https://github.com/egarrisxn/devbuild-resume',
    years: ['2024'],
    type: 'project',
    image: '/projects/devbuildresume.png',
  },
  {
    title: 'Angular MovieDB',
    description:
      'An intuitive movie search engine offering everything you would expect from a comprehensive movie database. Built with Angular, TypeScript, Tailwind CSS, & more.',
    href: 'https://github.com/egarrisxn/eg-angular-movies',
    years: ['2023', '2024'],
    type: 'project',
    image: '/projects/egmovies.png',
  },
  {
    title: 'The Tech Forum',
    description:
      'A forum application designed in a CMS style, demonstrating the CRUD principles. This app is built with Express, MySQL, Handlebars, Bootstrap, & deployed with Heroku.',
    href: 'https://github.com/egarrisxn/mvc-tech-forum-2023',
    years: ['2023'],
    type: 'project',
    image: '/projects/mvctechforum.png',
  },
]

export const getProjects = cache(async () => {
  if (!process.env.GITHUB_TOKEN) {
    throw new Error('No GITHUB_TOKEN provided. Generate a personal use token on GitHub.')
  }

  const projects = await Promise.all(
    Projects.map(async (proj) => {
      const split = proj.href?.split('/')
      if (!split || split[2] !== 'github.com') {
        return proj
      }

      return proj
    }),
  )

  return projects
})
