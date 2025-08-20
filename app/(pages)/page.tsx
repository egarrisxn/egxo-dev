import { Link } from 'next-view-transitions'
import * as motion from 'motion/react-client'
import { SmartLink } from '@/components/ui/smart-link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { MagneticSocialLink } from '@/components/magnetic-social-link'
import { SelectProjects } from '@/components/select-projects'
import { WORK_EXPERIENCE, BLOG_POSTS, EMAIL, SOCIAL_LINKS } from '@/lib/data'
import {
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
  TRANSITION_SECTION,
} from '@/lib/constants'

export default function Home() {
  return (
    <motion.div
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="mt-1 w-full max-w-[34.5rem] text-[0.95rem] leading-normal text-accent-foreground xl:max-w-none xl:text-base">
            {`Full Stack Developer and Digital Product Designer focused on building thoughtful tools for the web and the world. I take things one step at a time and try to stay guided by a Positive Mental Attitude (PMA).`}
          </p>
        </div>
        <div className="pt-2">
          <SmartLink href="/about" text="Learn more" variant="see-more" />
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Select Projects</h3>
        <SelectProjects />
        <div className="pt-7">
          <SmartLink href="/projects" text="Explore more" variant="see-more" />
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Work Experience</h3>
        <div className="flex flex-col space-y-3">
          {WORK_EXPERIENCE.map((job) => (
            <a
              className="relative overflow-hidden rounded-2xl p-0.5"
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              key={job.id}
            >
              <div className="relative size-full rounded-2xl bg-background py-2">
                <div className="relative flex w-full flex-row justify-between gap-x-6 sm:gap-0">
                  <div>
                    <h4 className="text-start text-zinc-900 dark:text-zinc-100">
                      {job.title}
                    </h4>
                    <p className="text-start text-zinc-500 dark:text-zinc-400">
                      {job.company}
                    </p>
                  </div>
                  <p className="text-end text-zinc-600 dark:text-zinc-300">
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="pt-5">
          <SmartLink
            href="/resume/EG-US-RESUME-2025.pdf"
            text="See more"
            variant="see-more"
          />
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-3 text-lg font-medium">Blog Posts</h3>
        <div className="flex flex-col">
          <AnimatedBackground
            enableHover
            className="size-full rounded-lg bg-accent"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl p-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="text-accent-foreground">{post.title}</h4>
                  <p className="text-muted-foreground/80">{post.description}</p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
        <div className="pt-5">
          <SmartLink href="/posts" text="Read more" variant="see-more" />
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 text-lg font-medium">Connect</h3>
        <p className="mb-5">
          Visit the{' '}
          <Link
            href="/contact"
            className="font-medium text-foreground/90 underline-offset-4 hover:underline"
          >
            Contact Page
          </Link>
          , or email me at <span>{EMAIL}</span>.
        </p>

        <div className="flex w-full max-w-md flex-wrap items-center justify-start gap-2 xl:gap-3">
          {SOCIAL_LINKS.map((link) => (
            <MagneticSocialLink key={link.label} link={link.link}>
              {link.label}
            </MagneticSocialLink>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}
