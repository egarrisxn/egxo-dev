import type { Metadata } from 'next'
import * as motion from 'motion/react-client'
import { SmartLink } from '@/components/ui/smart-link'
import ContactForm from '@/components/contact-form'
import {
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
  TRANSITION_SECTION,
} from '@/lib/constants'

export const metadata: Metadata = {
  alternates: {
    canonical: '/contact',
  },
  title: 'Contact',
  description: 'Then contact page for egxo.dev.',
}

export default function ContactPage() {
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
          <h3 className="mb-8 text-lg font-medium">Contact</h3>
          <p className="mb-8 text-[1.1rem] leading-normal text-foreground/80">
            Got questions, comments, or interest in working together? Let me
            know!
          </p>
          <div>
            <ContactForm />
          </div>
        </motion.section>
        <div className="pt-12">
          <SmartLink
            href="https://github.com/egarrisxn"
            text="GitHub"
            variant="external"
          />
          <SmartLink
            href="https://www.linkedin.com/in/ethan-gx"
            text="LinkedIn"
            variant="external"
          />
        </div>
      </motion.div>
    </div>
  )
}
