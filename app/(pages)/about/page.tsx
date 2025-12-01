import type { Metadata } from 'next'
import * as motion from 'motion/react-client'
import { SmartLink } from '@/components/ui/smart-link'
import { AboutTabs } from '@/components/about-tabs'
import {
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
  TRANSITION_SECTION,
} from '@/lib/constants'

export const metadata: Metadata = {
  alternates: {
    canonical: '/about',
  },
  title: 'About',
  description: 'Then about page for egxo.dev',
}

export default function AboutPage() {
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
          <h3 className="mb-12 text-lg font-medium">About</h3>
          <AboutTabs />
        </motion.section>
        <div className="pt-12">
          <SmartLink href="/projects" text="Projects" variant="see-more" />
        </div>
      </motion.div>
    </div>
  )
}
