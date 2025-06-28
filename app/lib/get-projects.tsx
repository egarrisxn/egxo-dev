import {cache} from 'react'
import type {Project} from './types'

const Projects: Project[] = [
  {
    title: 'Quik|Res',
    description:
      'An AI-powered resume-to-website generator for creating polished personal sites with ease. Built with Next.js, TypeScript, AWS S3, OpenAI, Clerk, Redis, Tailwind CSS, and more.',
    href: 'https://github.com/egarrisxn/quikres',
    years: ['2025'],
    type: 'project',
    image: '/projects/quikres.png',
  },
  {
    title: 'ManyLinks',
    description:
      'A sleek, single-page link aggregator to showcase all your important links in one place. Built with Next.js, TypeScript, MongoDB, Next-Auth, Tailwind CSS, and more.',
    href: 'https://github.com/egarrisxn/manylinks',
    years: ['2025'],
    type: 'project',
    image: '/projects/manylinks.png',
  },
  {
    title: 'ScribeVoice',
    description:
      'A voice-to-text transcription tool for capturing notes, ideas, and conversations. Built with Next.js, TypeScript, Supabase, OpenAI, Tailwind CSS, and more.',
    href: 'https://github.com/egarrisxn/scribevoice',
    years: ['2025'],
    type: 'project',
    image: '/projects/scribevoice.png',
  },
  {
    title: 'International Worldwide',
    description:
      'A multilingual platform for practicing coding challenges with internationalization support. Built with Next.js, JavaScript, Next-Intl, Tailwind CSS, and more.',
    href: 'https://github.com/egarrisxn/international-worldwide',
    years: ['2025'],
    type: 'project',
    image: '/projects/internationalworldwide.png',
  },
  {
    title: 'XPROD',
    description:
      'A full-featured productivity app to manage tasks, notes, and daily routines. Built with Next.js, TypeScript, Supabase, Zod, Tailwind CSS, and more.',
    href: 'https://github.com/egarrisxn/xprod',
    years: ['2025'],
    type: 'project',
    image: '/projects/xprod.png',
  },
  // {
  //   title: 'CC NextFolio',
  //   description:
  //     'A customizable portfolio template built for modern developers. Built with Next.js, TypeScript, Content Collections, Zustand, Tailwind CSS, and more.',
  //   href: 'https://github.com/egarrisxn/cc-nextfolio',
  //   years: ['2025'],
  //   type: 'project',
  //   image: '/projects/ccnextfolio.png',
  // },
  // {
  //   title: 'XO Chatbot',
  //   description:
  //     'An interactive AI chatbot powered by Grok, designed for seamless and responsive conversations. Built with Next.js, TypeScript, Next-Auth, Tailwind CSS, and more.',
  //   href: 'https://github.com/egarrisxn/xochatbot',
  //   years: ['2025'],
  //   type: 'project',
  //   image: '/projects/xochatbot.png',
  // },
  {
    title: 'Sway Bae Official',
    description:
      'The official website for streamer Sway Bae, featuring exclusive content and creator updates. Built with Next.js, JavaScript, Sanity, Tailwind CSS, and more.',
    href: 'https://github.com/egarrisxn/swaybaeofficial',
    years: ['2024'],
    type: 'project',
    image: '/projects/swaybae.png',
  },
  {
    title: 'n00bdev - Tips & Tricks',
    description:
      'A developer blog sharing practical coding tips, tools, and insights. Built with Astro, TypeScript, Tailwind CSS, and more.',
    href: 'https://github.com/egarrisxn/n00bdev',
    years: ['2024'],
    type: 'project',
    image: '/projects/n00bdev.png',
  },
  {
    title: 'Resbuilder: ATS Resumes',
    description:
      'A professional resume builder focused on ATS compatibility for better hiring results. Built with Next.js, JavaScript, MDX, Tailwind CSS, and more.',
    href: 'https://github.com/egarrisxn/ats-resbuilder',
    years: ['2024'],
    type: 'project',
    image: '/projects/resumebuilder.png',
  },
  {
    title: 'Resplashpad',
    description:
      'A high-resolution photo browser powered by the Unsplash API. Built with Vite, TypeScript, TanStack Query, Tailwind CSS, and more.',
    href: 'https://github.com/egarrisxn/resplashpad',
    years: ['2024'],
    type: 'project',
    image: '/projects/resplashpad.png',
  },
  {
    title: 'Unofficial Merchandise',
    description:
      'A modern e-commerce storefront offering smooth shopping and Stripe-powered payments. Built with Next.js, JavaScript, Sanity, Tailwind CSS, and more.',
    href: 'https://github.com/egarrisxn/unofficial-merchandise',
    years: ['2024'],
    type: 'project',
    image: '/projects/unofficialmerch.png',
  },
  {
    title: 'XO Starter',
    description:
      'A clean and flexible Next.js starter template focused on performance and scalability. Built with Next.js, TypeScript, Tailwind CSS, and more.',
    href: 'https://github.com/egarrisxn/xostarter',
    years: ['2024'],
    type: 'project',
    image: '/projects/xostarter.png',
  },
  // {
  //   title: 'WebSanity Builder',
  //   description:
  //     'An intuitive website builder that makes creating beautiful pages effortless. Built with Next.js, JavaScript, Sanity, Tailwind CSS, and more.',
  //   href: 'https://github.com/egarrisxn/websanity-builder',
  //   years: ['2024'],
  //   type: 'project',
  //   image: '/projects/websanity.png',
  // },
  {
    title: 'Pushin Mongo: Movies',
    description:
      'A full-stack movie database app powered by the MERN stack for discovering and managing movies. Built with Next.js, TypeScript, Express, MongoDB, Tailwind CSS, and more.',
    href: 'https://github.com/egarrisxn/pushin-mongo-movies',
    years: ['2023'],
    type: 'project',
    image: '/projects/pushinmongo.png',
  },
  {
    title: 'Gavins Typing Game',
    description:
      'An easy-to-use typing game created and tailored for my son, Gavin. Built with Next.js, TypeScript, Tailwind CSS, and more.',
    href: 'https://github.com/egarrisxn/gavins-typing-game',
    years: ['2023'],
    type: 'project',
    image: '/projects/typinggame.png',
  },
  {
    title: 'egxo.fyi',
    description:
      'A personal blog to share thoughts, insights, and development experiences. Built with Next.js, JavaScript, Sanity, Tailwind CSS, and more.',
    href: 'https://github.com/egarrisxn/egxo-fyi',
    years: ['2023'],
    type: 'project',
    image: '/projects/egxofyi.png',
  },
  {
    title: 'egxworld v1',
    description:
      'Version One of my portfolio, built to showcase projects and personal branding. Built with Next.js, JavaScript, Tailwind CSS, and more.',
    href: 'https://github.com/egarrisxn/egxworld-v1',
    years: ['2023'],
    type: 'project',
    image: '/projects/egxworldv1.png',
  },
  // {
  //   title: 'DevBuild Resume',
  //   description:
  //     'A stylish resume builder designed with aesthetics in mind over ATS compliance. Built with Next.js, TypeScript, Tailwind CSS, Material-Tailwind, and more.',
  //   href: 'https://github.com/egarrisxn/devbuild-resume',
  //   years: ['2023'],
  //   type: 'project',
  //   image: '/projects/devbuildresume.png',
  // },
]

export const getProjects = cache(async (): Promise<Project[]> => {
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
