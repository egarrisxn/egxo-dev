import Outline from '@/components/layout-outline'

export default function ThoughtsLayout({children}: {children: React.ReactNode}) {
  return (
    <Outline type='layout' name='Thoughts'>
      <article>{children}</article>
    </Outline>
  )
}
