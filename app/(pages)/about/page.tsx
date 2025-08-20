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
  description: 'Then about page for EGXO MDX.',
}

export default function AboutPage() {
  return (
    <div className="mt-16">
      <section></section>
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
          <SmartLink
            href="https://x.com/eg__xo"
            text="X (Twitter)"
            variant="external"
          />
          <SmartLink
            href="https://www.instagram.com/eg___xo"
            text="Instagram"
            variant="external"
          />
        </div>
      </motion.div>
    </div>
  )
}
