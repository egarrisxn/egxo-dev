import type {
  Links,
  WorkExperience,
  BlogPost,
  ProjectWithVideo,
  ProjectWithoutVideo,
  AboutTab,
  PomodoroTimerSettings,
  SynthKeys,
  OffsetSynthKeys,
} from '@/lib/types'

export const EMAIL = 'egarrisxn@gmail.com'

export const NAV_LINKS: Links[] = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/posts', label: 'Posts' },
  { href: '/tools', label: 'Tools' },
  { href: '/contact', label: 'Contact' },
]

export const SOCIAL_LINKS: Links[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/egarrisxn',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ethan-gx',
  },
  {
    label: 'Peerlist',
    href: 'https://peerlist.io/eg_xo',
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/eg__xo',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/eg___xo',
  },

  {
    label: 'Discord',
    href: 'https://discord.com/users/eg___xo',
  },
  {
    label: 'Spotify',
    href: 'https://open.spotify.com/user/egarrisxn',
  },
  {
    label: 'Bluesky',
    href: 'https://bsky.app/profile/egxo.bsky.social',
  },
]

export const TOOL_LINKS: Links[] = [
  { href: '/tools/button-copy', label: 'Vanilla CSS Button Copy' },
  { href: '/tools/paint-canvas', label: 'HTML Canvas API Paint' },
  { href: '/tools/palette-generator', label: 'Tailwind CSS Color Palettes' },
  { href: '/tools/pomodoro-timer', label: 'Pomodoro Timer & Task List' },
  { href: '/tools/qr-generator', label: 'QR Code React Generator' },
  { href: '/tools/synth-player', label: 'Tone Synthesizer Player' },
  { href: '/tools/transcribe-live', label: 'Web Speech API Transcribe' },
  { href: '/tools/typing-test', label: 'Speed & Accuracy Typing Test' },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Freelance',
    title: 'Full Stack Developer & Digital Product Designer',
    start: '2023',
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

export const MORE_PROJECTS: ProjectWithoutVideo[] = [
  {
    name: 'QuikRes',
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
    name: 'Sway Bae Offical v2',
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
    name: 'XOChatbot',
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
    name: 'XOStarter',
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
    name: 'Sway Bae Offical v1',
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

export const SYNTH_KEY_MAP: { [key: string]: string } = {
  a: 'C4',
  w: 'C#4',
  s: 'D4',
  e: 'D#4',
  d: 'E4',
  f: 'F4',
  t: 'F#4',
  g: 'G4',
  y: 'G#4',
  h: 'A4',
  u: 'A#4',
  j: 'B4',
  k: 'C5',
  o: 'C#5',
  l: 'D5',
  p: 'D#5',
  ';': 'E5',
  "'": 'F5',
  ']': 'F#5',
  '\\': 'G5',
}

export const SYNTH_WHITE_KEYS: SynthKeys[] = [
  { key: 'a', note: 'C4', label: 'A' },
  { key: 's', note: 'D4', label: 'S' },
  { key: 'd', note: 'E4', label: 'D' },
  { key: 'f', note: 'F4', label: 'F' },
  { key: 'g', note: 'G4', label: 'G' },
  { key: 'h', note: 'A4', label: 'H' },
  { key: 'j', note: 'B4', label: 'J' },
  { key: 'k', note: 'C5', label: 'K' },
  { key: 'l', note: 'D5', label: 'L' },
  { key: ';', note: 'E5', label: ';' },
  { key: "'", note: 'F5', label: "'" },
  { key: '\\', note: 'G5', label: '\\' },
]

export const SYNTH_BLACK_KEYS: OffsetSynthKeys[] = [
  { key: 'w', note: 'C#4', label: 'W', offset: 1.7 },
  { key: 'e', note: 'D#4', label: 'E', offset: 2.4 },
  { key: 't', note: 'F#4', label: 'T', offset: 3.75 },
  { key: 'y', note: 'G#4', label: 'Y', offset: 4.4 },
  { key: 'u', note: 'A#4', label: 'U', offset: 5.05 },
  { key: 'o', note: 'C#5', label: 'O', offset: 6.4 },
  { key: 'p', note: 'D#5', label: 'P', offset: 7.1 },
  { key: ']', note: 'F#5', label: ']', offset: 8.45 },
]

export const TYPING_TESTS = [
  "True fear doesn't arrive like thunder. It lingers quietly, in corners of the room you don't look at and in questions you're too afraid to ask. It masquerades as curiosity at first, a gentle nudge to keep exploring. But the deeper you go, the more you realize you were never meant to uncover what lies beneath. By the time you feel it creeping up your spine, it's already too late to run.",

  "People often romanticize the life of an artist—thinking it's all brushes and inspiration and brilliance. But they don't see the hours spent staring into nothing, the toll of obsession, or the way truth claws at your mind when you try to translate it into lines and color. Talent is nothing without the willingness to surrender yourself to madness, just to capture a fleeting image that may never be understood.",

  "There are things in this world that simply cannot be explained—events that shatter logic and stories that sound like dreams but leave real scars. As a manga artist, my duty isn't to solve them or label them as fiction. It's to record them exactly as they happened. Because some truths are too strange to be ignored, and too dangerous to be forgotten.",

  "Inspiration is a strange thing. It doesn't always come from beauty, joy, or love. Sometimes, it comes from places you wish you never went. A haunted village, a cursed painting, a woman whose smile was far too wide. The most powerful stories are born not from peace, but from the things that unsettle your soul and linger long after the page is turned.",

  "When I use Heaven's Door, I see people for who they truly are. Not who they pretend to be. Every line on the page of their lives is a confession. Guilt, regret, jealousy—all written plainly, if you know how to read it. Most people have secrets they'd kill to protect. The real horror isn't what I find in their past. It's how far they'll go to keep it buried.",

  "Not all cursed places wear their history like a warning sign. Some are beautiful, serene, even inviting. But beneath the silence is something twisted—a history soaked into the soil. They wait for people like me. People who can't resist the pull of a mystery. And once you set foot inside, it's not the ghosts you need to fear. It's the story that demands to be told.",

  "I've come to understand that monsters aren't always supernatural. Sometimes, they look like ordinary people—teachers, lovers, neighbors—driven to horror by grief, pride, or desperation. What they do can't be excused, but it can be understood. And that understanding is what makes it all the more terrifying. Evil without reason is simple. But evil with a human heart—that's what haunts you.",

  "I draw not because it's a career or because I want to be famous. I draw because I don't know how not to. The stories, the places, the people—they find their way into my mind, and they won't leave until I give them form. Some artists create worlds. I simply record the ones most people are too afraid to acknowledge exist.",

  "Curiosity is the engine of every great story. It's what pushes us forward, even when we should turn back. But curiosity is also dangerous. It whispers that you're safe, that you're in control, right up until the moment it leads you somewhere you can't escape from. The fire it lights is mesmerizing—until it consumes everything, including the hand that sparked it.",

  "You can see someone's face for years and never know them. But open the pages of their life, and the truth spills out in ink. Heaven's Door doesn't lie. Every shameful thought, every fleeting cruelty, every act of quiet kindness—it's all there. People hide so much from the world. But their hearts, once revealed, are louder than any scream.",
]

export const BUTTON_COPY_GROUPS = [
  {
    name: 'Default',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Rounded',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Gradient',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Wave',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Fold',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Pop',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Outline',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Glow',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Neon',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Liquid',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Retro',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Glitch',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Bubble',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Appearance',
    variants: [
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
      { name: 'green', color: '#22c55e' },
      { name: 'orange', color: '#f59e0b' },
      { name: 'red', color: '#ef4444' },
    ],
  },
  {
    name: 'Metallic',
    variants: [
      { name: 'light', color: '#ffffff' },
      { name: 'gray', color: '#d9d9d9' },
      { name: 'dark', color: '#1f2937' },
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
    ],
  },
  {
    name: 'Glass',
    variants: [
      { name: 'light', color: '#ffffff' },
      { name: 'gray', color: '#d9d9d9' },
      { name: 'dark', color: '#1f2937' },
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
    ],
  },
  {
    name: 'Neumorphic',
    variants: [
      { name: 'light', color: '#ffffff' },
      { name: 'gray', color: '#d9d9d9' },
      { name: 'dark', color: '#1f2937' },
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
    ],
  },
  {
    name: 'Loading',
    variants: [
      { name: 'light', color: '#ffffff' },
      { name: 'gray', color: '#d9d9d9' },
      { name: 'dark', color: '#1f2937' },
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
    ],
  },
  {
    name: 'Progress',
    variants: [
      { name: 'light', color: '#ffffff' },
      { name: 'gray', color: '#d9d9d9' },
      { name: 'dark', color: '#1f2937' },
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
    ],
  },
  {
    name: 'Success',
    variants: [
      { name: 'light', color: '#ffffff' },
      { name: 'gray', color: '#d9d9d9' },
      { name: 'dark', color: '#1f2937' },
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
    ],
  },
  {
    name: 'Error',
    variants: [
      { name: 'light', color: '#ffffff' },
      { name: 'gray', color: '#d9d9d9' },
      { name: 'dark', color: '#1f2937' },
      { name: 'purple', color: '#6366f1' },
      { name: 'blue', color: '#3b82f6' },
    ],
  },
]

export const CANVAS_PAINT_COLORS = [
  '#000000',
  '#808080',
  '#800000',
  '#808000',
  '#008000',
  '#008080',
  '#000080',
  '#800080',
  '#808040',
  '#004040',
  '#0080FF',
  '#004080',
  '#8000FF',
  '#804000',
  '#FFFFFF',
  '#C0C0C0',
  '#FF0000',
  '#FFFF00',
  '#00FF00',
  '#00FFFF',
  '#0000FF',
  '#FF00FF',
  '#FFFF80',
  '#00FF80',
  '#80FFFF',
  '#8080FF',
  '#FF0080',
  '#FF8040',
]

export const TEST_COLOR_SHADES = [50, 100, 200, 500, 700, 900]

export const TRANSCRIPTION_LANGUAGES = [
  { code: 'en-US', name: 'English (US)', flag: '🇺🇸' },
  { code: 'hi-IN', name: 'हिन्दी (Hindi)', flag: '🇮🇳' },
  { code: 'es-ES', name: 'Español', flag: '🇪🇸' },
  { code: 'fr-FR', name: 'Français', flag: '🇫🇷' },
  { code: 'de-DE', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja-JP', name: '日本語', flag: '🇯🇵' },
  { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
]

export const TYPING_STORAGE_KEY = 'typing-leaderboard'

export const DEFAULT_TIMER_SETTINGS: PomodoroTimerSettings = {
  workTime: 50 * 60,
  breakTime: 10 * 60,
  preset: '50/10',
}

export const MAGNETIC_SPRING_CONFIG = {
  stiffness: 26.7,
  damping: 4.1,
  mass: 0.2,
}

export const DEFAULT_SPRING_OPTIONS = {
  stiffness: 200,
  damping: 50,
  restDelta: 0.001,
}
