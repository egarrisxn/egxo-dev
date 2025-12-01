import type { Metadata } from 'next'
import Link from 'next/link'
import * as motion from 'motion/react-client'
import { SmartLink } from '@/components/ui/smart-link'
import { TOOL_LINKS } from '@/lib/data'
import {
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
  TRANSITION_SECTION,
} from '@/lib/constants'

export const metadata: Metadata = {
  alternates: {
    canonical: '/tools',
  },
  title: 'Tools',
  description: 'Then tools page for egxo.dev',
}

export default function ToolsPage() {
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
          <h3 className="mb-13 text-lg font-medium">Tools</h3>
          <motion.ul
            className="flex flex-col gap-3"
            variants={VARIANTS_CONTAINER}
          >
            {TOOL_LINKS.map((tool) => (
              <motion.li key={tool.href} variants={VARIANTS_SECTION}>
                <Link
                  href={tool.href}
                  className="text-sm font-medium underline-offset-4 hover:underline"
                >
                  {tool.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>
        <div className="pt-12">
          <SmartLink href="/contact" text="Contact" variant="see-more" />
        </div>
      </motion.div>
    </div>
  )
}
