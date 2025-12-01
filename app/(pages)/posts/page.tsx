import type { Metadata } from 'next'
import { Link } from 'next-view-transitions'
import * as motion from 'motion/react-client'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { SmartLink } from '@/components/ui/smart-link'
import { BLOG_POSTS } from '@/lib/data'
import {
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
  TRANSITION_SECTION,
} from '@/lib/constants'

export const metadata: Metadata = {
  alternates: {
    canonical: '/posts',
  },
  title: 'Posts',
  description: 'Then posts page for egxo.dev',
}

export default function PostsPage() {
  return (
    <div className="mt-16">
      <motion.div
        className="flex h-full flex-col justify-between space-y-16"
        variants={VARIANTS_CONTAINER}
        initial="hidden"
        animate="visible"
      >
        <motion.section
          variants={VARIANTS_SECTION}
          transition={TRANSITION_SECTION}
        >
          <h3 className="mb-8 text-lg font-medium">Posts</h3>
          <div className="flex flex-col gap-1.5 xl:gap-1">
            <AnimatedBackground
              enableHover
              className="size-full rounded-lg bg-accent dark:bg-accent/80"
              transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.2,
              }}
            >
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.uid}
                  className="-mx-3 rounded-xl p-4"
                  href={post.link}
                  data-id={post.uid}
                >
                  <div className="space-y-2">
                    <span className="ml-0.5 text-xs text-muted-foreground/90">
                      {post.year}
                    </span>
                    <h4 className="mt-2 text-lg leading-[1.4] text-accent-foreground xl:mt-1 xl:text-xl">
                      {post.title}
                    </h4>
                    <p className="text-base leading-normal text-muted-foreground xl:text-lg">
                      {post.description}
                    </p>
                  </div>
                </Link>
              ))}
            </AnimatedBackground>
          </div>
        </motion.section>
        <div className="pt-12">
          <SmartLink href="/tools" text="Tools" variant="see-more" />
        </div>
      </motion.div>
    </div>
  )
}
