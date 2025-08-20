import type { Metadata } from 'next'
import * as motion from 'motion/react-client'
import { SmartLink } from '@/components/ui/smart-link'
import { ProjectImage } from '@/components/project-image'
import { MORE_PROJECTS } from '@/lib/data'
import {
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
  TRANSITION_SECTION,
} from '@/lib/constants'

export const metadata: Metadata = {
  alternates: {
    canonical: '/projects',
  },
  title: 'Projects',
  description: 'Then projects page for EGXO MDX.',
}

export default function ProjectsPage() {
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
          <h3 className="mb-13 text-lg font-medium">Projects</h3>
          <div className="grid grid-cols-1 gap-16">
            {MORE_PROJECTS.map((project) => (
              <div key={project.name} className="space-y-3">
                <div className="relative rounded-2xl bg-accent-foreground/40 p-0.5 shadow-md ring-1 ring-muted/50 ring-inset">
                  <ProjectImage
                    href={project.link}
                    thumbnail={project.thumbnail}
                  />
                </div>
                <div className="px-1">
                  <a
                    className="group relative inline-block text-foreground"
                    href={project.link}
                    target="_blank"
                  >
                    {project.name}
                    <span className="absolute bottom-0.5 left-0 block h-[1px] w-full max-w-0 bg-foreground transition-all duration-200 group-hover:max-w-full"></span>
                  </a>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
        <div className="pt-12">
          <SmartLink href="/posts" text="Posts" variant="see-more" />
        </div>
      </motion.div>
    </div>
  )
}
