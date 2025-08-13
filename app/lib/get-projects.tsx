import {cache} from 'react'
import type {Project} from './types'

const Projects: Project[] = [
  {
    title: 'Patricia Penisten: A Life Remembered',
    description:
      'A website to celebrate the life and legacy of my grandmother, Pat Penisten (1935-2025). Built with Next.js, TypeScript, Supabase, Tailwind CSS, and more.',
    href: 'https://patricia-penisten.com',
    years: ['2025'],
    type: 'project',
    image: '/projects/pgp.png',
  },
  {
    title: 'Quik|Res',
    description:
      'An AI-powered resume-to-website generator for creating polished personal sites with ease. Built with Next.js, TypeScript, AWS S3, OpenAI, Clerk, Redis, Tailwind CSS, and more.',
    href: 'https://quikres.vercel.app',
    years: ['2025'],
    type: 'project',
    image: '/projects/quikres.png',
  },
  {
    title: 'ManyLinks',
    description:
      'A sleek, single-page link aggregator to showcase all your important links in one place. Built with Next.js, TypeScript, MongoDB, Next-Auth, Tailwind CSS, and more.',
    href: 'https://manylinks.vercel.app',
    years: ['2025'],
    type: 'project',
    image: '/projects/manylinks.png',
  },
  {
    title: 'ScribeVoice',
    description:
      'A voice-to-text transcription tool for capturing notes, ideas, and conversations. Built with Next.js, TypeScript, Supabase, OpenAI, Tailwind CSS, and more.',
    href: 'https://scribevoice.vercel.app',
    years: ['2025'],
    type: 'project',
    image: '/projects/scribevoice.png',
  },
  {
    title: 'XO Chatbot',
    description:
      'An interactive AI chatbot powered by Grok, designed for seamless and responsive conversations. Built with Next.js, TypeScript, Next-Auth, Tailwind CSS, and more.',
    href: 'https://xochatbot.vercel.app',
    years: ['2025'],
    type: 'project',
    image: '/projects/xochatbot.png',
  },
  {
    title: 'xprod',
    description:
      'A full-featured productivity app to manage tasks, notes, and daily routines. Built with Next.js, TypeScript, Supabase, Zod, Tailwind CSS, and more.',
    href: 'https://xprod.vercel.app',
    years: ['2024'],
    type: 'project',
    image: '/projects/xprod.png',
  },
  {
    title: 'Sway Bae Official',
    description:
      'The official website for streamer Sway Bae, featuring exclusive content and creator updates. Built with Next.js, JavaScript, Sanity, Tailwind CSS, and more.',
    href: 'https://swaybae.net',
    years: ['2024'],
    type: 'project',
    image: '/projects/swaybae.png',
  },
  {
    title: 'International Worldwide',
    description:
      'A multilingual platform for practicing coding challenges with internationalization support. Built with Next.js, JavaScript, Next-Intl, Tailwind CSS, and more.',
    href: 'https://international-worldwide.vercel.app',
    years: ['2024'],
    type: 'project',
    image: '/projects/internationalworldwide.png',
  },
  {
    title: 'XO Starter',
    description:
      'A clean and flexible Next.js starter template focused on performance and scalability. Built with Next.js, TypeScript, Tailwind CSS, and more.',
    href: 'https://xostarter.vercel.app',
    years: ['2024'],
    type: 'project',
    image: '/projects/xostarter.png',
  },
  {
    title: 'ATS | Resbuilder',
    description:
      'A professional resume builder focused on ATS compatibility for better hiring results. Built with Next.js, JavaScript, MDX, Tailwind CSS, and more.',
    href: 'https://ats-resbuilder.vercel.app',
    years: ['2024'],
    type: 'project',
    image: '/projects/resumebuilder.png',
  },
  {
    title: 'Resplashpad',
    description:
      'A high-resolution photo browser powered by the Unsplash API. Built with Vite, TypeScript, TanStack Query, Tailwind CSS, and more.',
    href: 'https://resplashpad.vercel.app',
    years: ['2023'],
    type: 'project',
    image: '/projects/resplashpad.png',
  },
  {
    title: 'n00b:dev',
    description:
      'A developer blog sharing practical coding tips, tools, and insights for beginner level developers. Built with Astro, TypeScript, Tailwind CSS, and more.',
    href: 'https://n00bdev.vercel.app',
    years: ['2023'],
    type: 'project',
    image: '/projects/n00bdev.png',
  },
  {
    title: 'Unofficial Merchandise',
    description:
      'A modern e-commerce storefront offering smooth shopping and Stripe-powered payments. Built with Next.js, JavaScript, Sanity, Tailwind CSS, and more.',
    href: 'https://unofficialmerchandise.vercel.app',
    years: ['2023'],
    type: 'project',
    image: '/projects/unofficialmerch.png',
  },
  // {
  //   title: 'Pushin Mongo Movies',
  //   description:
  //     'A full-stack movie database app powered by the MERN stack for discovering and managing movies. Built with Next.js, TypeScript, Express, MongoDB, Tailwind CSS, and more.',
  //   href: 'https://pushin-mongo-movies.vercel.app',
  //   years: ['2023'],
  //   type: 'project',
  //   image: '/projects/pushinmongo.png',
  // },
  {
    title: 'egxo.fyi',
    description:
      'A personal blog to share thoughts, insights, and development experiences. Built with Next.js, JavaScript, Sanity, Tailwind CSS, and more.',
    href: 'https://egxo.fyi',
    years: ['2023'],
    type: 'project',
    image: '/projects/egxofyi.png',
  },
  {
    title: 'EG|WORLD v1',
    description:
      'Verson one of my personal portfolio, built to showcase projects and personal branding. Built with Next.js, JavaScript, Tailwind CSS, and more.',
    href: 'https://egxworld.vercel.app',
    years: ['2023'],
    type: 'project',
    image: '/projects/egxworldv1.png',
  },
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
