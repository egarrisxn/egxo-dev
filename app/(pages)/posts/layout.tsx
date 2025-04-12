import Outline from '@/components/layout-outline'

export default function PostsLayout({children}: {children: React.ReactNode}) {
  return (
    <Outline type='layout' name='Posts'>
      <article>{children}</article>
    </Outline>
  )
}
