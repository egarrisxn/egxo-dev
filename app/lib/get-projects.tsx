import {cache} from 'react'
import type {Project} from './types'

const Projects: Project[] = [
  {
    title: 'XPROD',
    description:
      'A comprehensive productivity web app designed to streamline your daily tasks and organization. Technologies: Next.js, React, TypeScript, Supabase, Zod, Tailwind CSS, Vercel, & more.',
    href: 'https://github.com/egarrisxn/xprod',
    years: ['2025'],
    type: 'project',
    image: '/projects/xprod.png',
  },
  {
    title: 'ScribeVoice',
    description:
      'A powerful voice-to-text transcription tool for notes, transcripts, lists, and more. Technologies: Next.js, React, TypeScript, Supabase, OpenAI, Tailwind CSS, Vercel, & more.',
    href: 'https://github.com/egarrisxn/scribevoice',
    website: 'https://scribevoice.vercel.app',
    years: ['2025'],
    type: 'project',
    image: '/projects/scribevoice.png',
  },
  {
    title: 'XO Chatbot',
    description:
      'An AI-powered chatbot with Grok integration, designed for smooth and intuitive conversations. Technologies: Next.js, React, TypeScript, Grok, Next-Auth, Tailwind CSS, Vercel, & more.',
    website: 'https://xochatbot.vercel.app',
    years: ['2025'],
    type: 'project',
    image: '/projects/xochatbot.png',
  },
  {
    title: 'International Worldwide',
    description:
      'A multilingual coding practice platform featuring themed challenges across various topics. Technologies: Next.js, React, JavaScript, Next-Intl, Tailwind CSS, Vercel, & more.',
    href: 'https://github.com/egarrisxn/international-worldwide',
    years: ['2025'],
    type: 'project',
    image: '/projects/internationalworldwide.png',
  },
  {
    title: 'Unofficial Merchandise',
    description:
      'A fully functional e-commerce store with seamless shopping and secure payments. Technologies: Next.js, React, JavaScript, Stripe, Sanity, Tailwind CSS, Vercel, & more.',
    href: 'https://github.com/egarrisxn/unofficial-merchandise',
    years: ['2025'],
    type: 'project',
    image: '/projects/unofficialmerch.png',
  },
  {
    title: 'n00bdev - Tips & Tricks',
    description:
      'A developer-centric blog featuring insightful tips, tricks, and best practices. Technologies: Astro, TypeScript, Tailwind CSS, Vercel, & more.',
    href: 'https://github.com/egarrisxn/n00bdev',
    years: ['2025'],
    type: 'project',
    image: '/projects/n00bdev.png',
  },
  {
    title: 'Resplashpad',
    description:
      'A free high-resolution photo aggregator powered by the Unsplash API. Technologies: Vite, React, TypeScript, TanStack Query, Tailwind CSS, Readix-UI, Vercel, & more.',
    href: 'https://github.com/egarrisxn/resplashpad',
    years: ['2025'],
    type: 'project',
    image: '/projects/resplashpad.png',
  },
  {
    title: 'CC NextFolio',
    description:
      'A sleek and customizable website template tailored for modern portfolios. Technologies: Next.js, React, TypeScript, Content Collections, Zustand, Tailwind CSS, Vercel, & more.',
    href: 'https://github.com/egarrisxn/cc-nextfolio',
    years: ['2025'],
    type: 'project',
    image: '/projects/ccnextfolio.png',
  },
  {
    title: 'Mississippi Paint',
    description:
      'A web based application spin on the classic Microsoft Paint. Technologies: Nextjs, React, TypeScript, Tailwind CSS, Readix-UI, Vercel, & more.',
    href: 'https://github.com/egarrisxn/mississippi-paint',
    years: ['2025'],
    type: 'project',
    image: '/projects/ms-paint.png',
  },
  {
    title: 'Sway Bae Official',
    description:
      'The official site for full-time streamer and content creator Sway Bae, featuring updates and exclusive content. Technologies: Next.js, React, JavaScript, Sanity, Tailwind CSS, daisyUI, Vercel, & more.',
    href: 'https://github.com/egarrisxn/swaybaeofficial',
    years: ['2024'],
    type: 'project',
    image: '/projects/swaybae.png',
  },
  {
    title: 'XO Starter',
    description:
      'A modern, optimized Next.js starter template built for performance and flexibility. Technologies: Next.js, React, TypeScript, Tailwind CSS, Radix-UI, Vercel, & more.',
    href: 'https://github.com/egarrisxn/xostarter',
    years: ['2024'],
    type: 'project',
    image: '/projects/xostarter.png',
  },
  {
    title: 'Resbuilder: ATS Resumes',
    description:
      'A professional, ATS-friendly resume builder designed for optimal job application success. Technologies: Next.js, React, JavaScript, MDX, Tailwind CSS, Vercel, & more.',
    href: 'https://github.com/egarrisxn/ats-resbuilder',
    years: ['2024'],
    type: 'project',
    image: '/projects/resumebuilder.png',
  },
  {
    title: 'WebSanity Builder',
    description:
      'An intuitive website builder that simplifies the process of creating stunning web pages. Technologies: Next.js, React, JavaScript, Sanity, Tailwind CSS, Vercel, & more.',
    href: 'https://github.com/egarrisxn/websanity-builder',
    years: ['2024'],
    type: 'project',
    image: '/projects/websanity.png',
  },
  {
    title: 'Pushin Mongo: Movies',
    description:
      'A full-stack movie database app leveraging the MERN stack for dynamic browsing and discovery. Technologies: Next.js, React, TypeScript, Express, MongoDB, Tailwind CSS, Vercel, & more.',
    href: 'https://github.com/egarrisxn/pushin-mongo-movies',
    years: ['2024'],
    type: 'project',
    image: '/projects/pushinmongo.png',
  },
  {
    title: 'egxworld v1',
    description:
      'My first portfolio website—designed to showcase projects, skills, and more. Technologies: Next.js, React, JavaScript, Tailwind CSS, Radix-UI, Vercel, & more.',
    href: 'https://github.com/egarrisxn/egxworld-v1',
    years: ['2024'],
    type: 'project',
    image: '/projects/egxworldv1.png',
  },
  {
    title: 'egxo.fyi',
    description:
      'A personal blog built to document insights, experiences, and tech-related thoughts. Technologies: Next.js, React, JavaScript, Sanity, Tailwind CSS, Radix-UI, Vercel, & more.',
    href: 'https://github.com/egarrisxn/egxo-fyi',
    years: ['2024'],
    type: 'project',
    image: '/projects/egxofyi.png',
  },
  {
    title: 'Easy Copy Buttons',
    description:
      'A handy collection of pre-styled, copy-paste buttons for effortless UI development. Technologies: Next.js, JavaScript, Tailwind CSS, Vercel, & more.',
    href: 'https://github.com/egarrisxn/ezcopy-buttons-2024',
    years: ['2024'],
    type: 'project',
    image: '/projects/ezcopy.png',
  },
  {
    title: 'NotCoolors',
    description:
      'A fast and user-friendly color palette generator for all your design needs. Technologies: Next.js, React, JavaScript, Tailwind CSS, Vercel, & more.',
    href: 'https://github.com/egarrisxn/not-coolors-2024',
    years: ['2024'],
    type: 'project',
    image: '/projects/notcoolors.png',
  },
  {
    title: 'DevBuild Resume',
    description:
      'A visually appealing resume builder, prioritizing aesthetics over ATS compliance. Technologies: Next.js, TypeScript, Tailwind CSS, Material-Tailwind, Vercel, & more.',
    href: 'https://github.com/egarrisxn/devbuild-resume-2024',
    years: ['2024'],
    type: 'project',
    image: '/projects/devbuildresume.png',
  },
  {
    title: 'Angular Movies DB',
    description:
      'A feature-rich movie search engine providing comprehensive film details. Technologies: Angular, TypeScript, Tailwind CSS, Netlify, & more.',
    href: 'https://github.com/egarrisxn/angular-movies-db-2023',
    years: ['2023'],
    type: 'project',
    image: '/projects/egmovies.png',
  },
  {
    title: '(PEHN) User Management',
    description:
      'A minimalist CRUD application for managing user contacts efficiently. Technologies: Express, HTMX, Pug, JavaScript, Heroku, & more.',
    href: 'https://github.com/egarrisxn/pehn-user-management-2023',
    years: ['2023'],
    type: 'project',
    image: '/projects/usermanagement.png',
  },
  {
    title: 'M3RN B00KSTACK',
    description:
      'A full-stack MERN book application demonstrating REST APIs, authentication, and CRUD operations. Technologies: Express, MongoDB, React, JavaScript, Tailwind CSS, Heroku, & more.',
    href: 'https://github.com/egarrisxn/m3rnb00kstack-2023',
    years: ['2023'],
    type: 'project',
    image: '/projects/m3rnb00kstack.png',
  },
  // {
  //   title: 'MVC Tech Forum',
  //   description:
  //     'A CMS-style tech forum for discussions and updates, built with the MVC pattern. Technologies: Express, MySQL, Sequelize, Handlebars, JavaScript, Bootstrap, CSS3, Heroku, & more.',
  //   href: 'https://github.com/egarrisxn/mvc-tech-forum-2023',
  //   years: ['2023'],
  //   type: 'project',
  //   image: '/projects/mvctechforum.png',
  //
  // },
  // {
  //   title: 'Express Note Taker',
  //   description:
  //     'A simple yet powerful note-taking app with full CRUD functionality. Technologies: Express, JavaScript, Bootstrap, CSS3, Heroku, & more.',
  //   href: 'https://github.com/egarrisxn/express-note-taker-2023',
  //   years: ['2023'],
  //   type: 'project',
  //   image: '/projects/expressnotetaker.png',
  //
  // },
  // {
  //   title: 'Vanilla Portfolio Template',
  //   description:
  //     'A clean, modern portfolio template using pure HTML, CSS, and JavaScript. Technologies: HTML5, CSS3, JavaScript, GitHub Pages, & more.',
  //   href: 'https://github.com/egarrisxn/html-portfolio-template-2023',
  //   years: ['2023'],
  //   type: 'project',
  //   image: '/projects/portfoliotemplate.png',
  //
  // },
  // {
  //   title: 'The Weather Dashboard',
  //   description:
  //     'A fast, lightweight weather app that fetches real-time data using APIs. Technologies: jQuery, JavaScript, CSS3, HTML5, GitHub Pages, & more.',
  //   href: 'https://github.com/egarrisxn/jquery-weather-dashboard-2023',
  //   years: ['2023'],
  //   type: 'project',
  //   image: '/projects/weatherdashboard.png',
  //
  // },
  // {
  //   title: 'Quiz Game: Code Edition',
  //   description:
  //     'A fun coding quiz game that challenges your programming knowledge while tracking high scores. Technologies: jQuery, JavaScript, CSS3, HTML5, GitHub Pages, & more.',
  //   href: 'https://github.com/egarrisxn/jquery-quiz-game-2023',
  //   years: ['2023'],
  //   type: 'project',
  //   image: '/projects/thequizgame.png',
  //
  // },
  // {
  //   title: 'Daily Scheduler',
  //   description:
  //     'A simple and efficient scheduler for organizing daily tasks. Technologies: jQuery, JavaScript, CSS3, HTML5, GitHub Pages, & more.',
  //   href: 'https://github.com/egarrisxn/jquery-daily-scheduler-2023',
  //   years: ['2023'],
  //   type: 'project',
  //   image: '/projects/dailyscheduler.png',
  //
  // },
  // {
  //   title: 'Password Generator',
  //   description:
  //     'A web-based tool that creates secure, randomized passwords with various customization options. Technologies: JavaScript, Bootstrap, CSS3, HTML5, GitHub Pages, & more.',
  //   href: 'https://github.com/egarrisxn/password-generator-2023',
  //   years: ['2023'],
  //   type: 'project',
  //   image: '/projects/passwordgenerator.png',
  //
  // },
  // {
  //   title: 'Player One Reads',
  //   description:
  //     "A recommendation app that suggests books based on a user's favorite video game genres. Technologies: Bulma, JavaScript, CSS3, HTML5, GitHub Pages, & more.",
  //   href: 'https://github.com/egarrisxn/Player-One-Reads',
  //   years: ['2023'],
  //   type: 'project',
  //   image: '/projects/playeronereads.png',
  //
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
