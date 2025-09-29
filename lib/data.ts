type NavLink = {
  href: string
  label: string
}

type SocialLink = {
  label: string
  link: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  year: number
  title: string
  description: string
  link: string
  uid: string
}

type ProjectBase = {
  id: string
  name: string
  description: string
  link: string
}

type ProjectWithVideo = ProjectBase & {
  video: string
  thumbnail: string
}

type ProjectectWithoutVideo = ProjectBase & {
  thumbnail: string
  video?: never
}

type AboutTab = {
  title: string
  subtitle: string
  content: string
}

export const NAV_LINKS: NavLink[] = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/posts', label: 'Posts' },
  { href: '/contact', label: 'Contact' },
]

export const EMAIL = 'egarrisxn@gmail.com'

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/egarrisxn',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/ethan-gx',
  },
  {
    label: 'Peerlist',
    link: 'https://peerlist.io/eg_xo',
  },
  {
    label: 'X (Twitter)',
    link: 'https://x.com/eg__xo',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/eg___xo',
  },

  {
    label: 'Discord',
    link: 'https://discord.com/users/eg___xo',
  },
  {
    label: 'Spotify',
    link: 'https://open.spotify.com/user/egarrisxn',
  },
  {
    label: 'Bluesky',
    link: 'https://bsky.app/profile/egxo.bsky.social',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'Full Stack Developer & Digital Product Designer',
    start: '2024',
    end: 'Present',
    link: 'https://egxo.dev',
    id: 'work1',
  },
  {
    company: 'Sway Bae',
    title: 'Creative Tech & Event Lead',
    start: '2023',
    end: 'Present',
    link: 'https://egxo.dev',
    id: 'work2',
  },
  {
    company: 'Armadillo Ale Works',
    title: 'Regional Account Manager',
    start: '2020',
    end: '2023',
    link: 'https://egxo.dev',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    year: 2025,
    title: 'Truly Understanding MDX',
    description:
      'Wrap your brain around MDX and the benefits it has for the modern web',
    link: '/blog/truly-understanding-mdx',
    uid: 'blog-1',
  },
  {
    year: 2025,
    title: 'TypeScript is The New Norm',
    description:
      'Explore the Benefits and Features of TypeScript for building scalable applications',
    link: '/blog/typescript-is-the-new-norm',
    uid: 'blog-2',
  },
  {
    year: 2025,
    title: 'The Power of RSC',
    description:
      'Discover how React Server Components improves performance and reduces bundle size',
    link: '/blog/the-power-of-rsc',
    uid: 'blog-3',
  },
]

export const SELECT_PROJECTS: ProjectWithVideo[] = [
  {
    name: 'Quik|Res',
    description: 'AI-powered resume-to-website generator.',
    link: 'https://quikres.vercel.app/',
    video:
      'https://zknos4ss5a.ufs.sh/f/Bz7PmjuYTc3C1JZ1rClz0jpPentqV9SklJGwFOZXzmQsR43K',
    thumbnail: '/projects/quikres.png',
    id: 'project1',
  },
  {
    name: 'ManyLinks',
    description: 'Single page link aggregator.',
    link: 'https://manylinks.vercel.app/',
    video:
      'https://zknos4ss5a.ufs.sh/f/Bz7PmjuYTc3C9vJM8SMYEGw31MjJTsHuRtarCDNYPBclo9dh',
    thumbnail: '/projects/manylinks.png',
    id: 'project2',
  },
]

export const MORE_PROJECTS: ProjectectWithoutVideo[] = [
  {
    name: 'Quik|Res',
    description:
      'An AI-powered resume-to-website generator for creating polished personal sites with ease. Built with Next.js, TypeScript, AWS S3, Clerk, Tailwind CSS, and more.',
    link: 'https://quikres.vercel.app/',
    thumbnail: '/projects/quikres-1.png',
    id: 'project1',
  },
  {
    name: 'ManyLinks',
    description:
      'A sleek, single-page link aggregator to showcase all your important links in one place. Built with Next.js, TypeScript, MongoDB, Next-Auth, Tailwind CSS, and more.',
    link: 'https://manylinks.vercel.app/',
    thumbnail: '/projects/manylinks-1.png',
    id: 'project2',
  },
  {
    name: 'Sway Bae Offical (2025)',
    description:
      'The *NEW* online space for streamer Sway Bae, featuring exclusive content and creator updates. Built with Next.js, TypeScript, Supabase, Tailwind CSS, and more.',
    link: 'https://swaybae.net',
    thumbnail: '/projects/swaybae-v2.png',
    id: 'project3',
  },
  {
    name: 'ScribeVoice',
    description:
      'A voice-to-text transcription tool for capturing notes, ideas, and conversations. Built with Next.js, TypeScript, Supabase, OpenAI, Tailwind CSS, and more.',
    link: 'https://scribevoice.vercel.app',
    thumbnail: '/projects/scribevoice.png',
    id: 'project4',
  },
  {
    name: 'Patricia Penisten: A Life Remembered',
    description:
      'A website to celebrate the life and legacy of my grandmother, Pat Penisten (1935-2025). Built with Next.js, TypeScript, Supabase, Tailwind CSS, and more.',
    link: 'https://patricia-penisten.com',
    thumbnail: '/projects/patriciapenisten.png',
    id: 'project5',
  },
  {
    name: 'XProd',
    description:
      'A full-featured productivity app to manage tasks, notes, and daily routines. Built with Next.js, TypeScript, Supabase, Zod, Tailwind CSS, and more.',
    link: 'https://xprod.vercel.app',
    thumbnail: '/projects/xprod.png',
    id: 'project6',
  },
  {
    name: 'XO Chatbot',
    description:
      'An interactive AI chatbot powered by Grok, designed for seamless and responsive conversations. Built with Next.js, TypeScript, Next-Auth, Tailwind CSS, and more.',
    link: 'https://xochatbot.vercel.app',
    thumbnail: '/projects/xochatbot.png',
    id: 'project7',
  },
  {
    name: 'International Worldwide',
    description:
      'A multilingual platform for practicing coding challenges with internationalization support. Built with Next.js, JavaScript, Next-Intl, Tailwind CSS, and more.',
    link: 'https://international-worldwide.vercel.app',
    thumbnail: '/projects/internationalworldwide.png',
    id: 'project8',
  },
  {
    name: 'XO Starter',
    description:
      'A clean and flexible Next.js starter template focused on performance and scalability. Built with Next.js, TypeScript, Tailwind CSS, and more.',
    link: 'https://xostarter.vercel.app',
    thumbnail: '/projects/xostarter.png',
    id: 'project9',
  },
  {
    name: 'ATS Resbuilder',
    description:
      'A professional resume builder focused on ATS compatibility for better hiring results. Built with Next.js, JavaScript, MDX, Tailwind CSS, and more.',
    link: 'https://ats-resbuilder.vercel.app',
    thumbnail: '/projects/resbuilder.png',
    id: 'project10',
  },
  {
    name: 'Resplashpad',
    description:
      'A high-resolution photo browser powered by the Unsplash API. Built with Vite, TypeScript, TanStack Query, Tailwind CSS, and more.',
    link: 'https://resplashpad.vercel.app',
    thumbnail: '/projects/resplashpad.png',
    id: 'project11',
  },
  {
    name: 'n00b:dev',
    description:
      'A developer blog sharing practical coding tips, tools, and insights for beginner level developers. Built with Astro, TypeScript, Tailwind CSS, and more.',
    link: 'https://n00bdev.vercel.app',
    thumbnail: '/projects/n00bdev.png',
    id: 'project12',
  },
  {
    name: 'Unofficial Merchandise',
    description:
      'A modern e-commerce storefront offering smooth shopping and Stripe-powered payments. Built with Next.js, JavaScript, Sanity, Tailwind CSS, and more.',
    link: 'https://unofficialmerchandise.vercel.app',
    thumbnail: '/projects/unofficialmerchandise.png',
    id: 'project13',
  },
  {
    name: 'Egxo.fyi',
    description:
      'A personal blog to share thoughts, insights, and development experiences. Built with Next.js, JavaScript, Sanity, Tailwind CSS, and more.',
    link: 'https://egxo.fyi',
    thumbnail: '/projects/egxo-fyi.png',
    id: 'project14',
  },
  {
    name: 'Sway Bae Offical (2023)',
    description:
      'The *OLD* online space for streamer Sway Bae, featuring exclusive content and creator updates. Built with Next.js, JavaScript, Sanity, Tailwind CSS, and more.',
    link: 'https://swaybae-v1.vercel.app',
    thumbnail: '/projects/swaybae-v1.png',
    id: 'project15',
  },
]

export const ABOUT_ITEMS: AboutTab[] = [
  {
    title: 'Full Stack Development',
    subtitle: 'Building for the Web',
    content: `I design and build modern web applications from front to back. I focus on creating clean, accessible interfaces and building scalable back-end systems. My current stack includes TypeScript, React, Next.js, Tailwind CSS, Node.js, and Supabase, with attention to SEO, performance, accessibility, and real-world usability. I also explore how AI and machine learning can enhance development workflows and product capabilities when used responsibly. In the past, I've worked with MongoDB, Prisma, MySQL, Express, Bootstrap, and jQuery, all of which continue to shape how I approach new projects. Always looking to collaborate, so get in touch and let's build something beautiful!`,
  },
  {
    title: 'Digital Product Design',
    subtitle: 'Shaping Experiences',
    content: `For me, design and development go hand in hand. I approach products with a user-first mindset, blending visual design, interaction, and technical execution to create experiences that feel intuitive and purposeful. Beyond digital products, I've created design work for creators, musicians, and events, adding a creative edge that connects technology with culture. I focus on usability, accessibility, and design systems that make experiences seamless across devices. I'm exploring how AI can inform design decisions, spark creativity, and improve user experiences in ethical ways, helping to streamline workflows and unlock new creative possibilities together.`,
  },
  {
    title: 'Management & Leadership',
    subtitle: 'Driving Projects',
    content: `Beyond code and design, I've led teams, managed client relationships, and overseen creative projects. My past roles in account management, event leadership, and operations have shaped the way I approach current and future work. I focus on balancing strategy, communication, and execution to keep projects moving smoothly. I also prioritize creating collaborative environments where team members can thrive, encouraging transparency and feedback throughout projects. I'm exploring how AI can support productivity and workflows when applied thoughtfully, making complex processes more efficient while keeping a human-centered approach.`,
  },
]
