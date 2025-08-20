import { ScrollProgress } from '@/components/ui/scroll-progress'
import { CopyButton } from '@/components/copy-url'

export default function LayoutBlogPost({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-foreground"
        springOptions={{
          bounce: 0,
        }}
      />
      <div className="absolute top-24 right-4">
        <CopyButton />
      </div>
      <article className="prose mt-16 grid max-w-screen pb-16 prose-gray dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:prose-base prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium">
        {children}
      </article>
    </>
  )
}
