'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import { SELECT_PROJECTS } from '@/lib/data'
import { ProjectVideo } from '@/components/project-video'
import { ProjectImage } from '@/components/project-image'

export function SelectProjects() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {SELECT_PROJECTS.map((project) => (
        <div key={project.name} className="space-y-2">
          <div className="relative rounded-2xl bg-accent-foreground/40 p-0.5 shadow-md ring-1 ring-muted/50 ring-inset">
            {isDesktop ? (
              <ProjectVideo video={project.video} />
            ) : (
              <ProjectImage href={project.link} thumbnail={project.thumbnail} />
            )}
          </div>
          <div className="px-1">
            <a
              className="group relative inline-block text-foreground"
              href={project.link}
              target="_blank"
            >
              {project.name}
              <span className="absolute bottom-0.5 left-0 block h-px w-full max-w-0 bg-foreground transition-all duration-200 group-hover:max-w-full"></span>
            </a>
            <p className="text-muted-foreground">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
