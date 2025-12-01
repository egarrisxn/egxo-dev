import { ThemeSwitch } from '@/components/theme-switch'

export function Footer() {
  return (
    <footer className="z-50 mt-24 border-t border-border p-4">
      <div className="flex items-center justify-between text-muted-foreground">
        <section className="flex flex-row items-center gap-1.5 font-semibold tracking-tighter">
          <a
            href="https://egxo-v1.vercel.app"
            target="_blank"
            className="transition-colors duration-200 hover:text-accent-foreground"
          >
            v1
          </a>{' '}
          |
          <a
            href="https://egxo-v2.vercel.app"
            target="_blank"
            className="transition-colors duration-200 hover:text-accent-foreground"
          >
            v2
          </a>{' '}
          |
          <a
            href="https://egxo.dev"
            target="_blank"
            className="transition-colors duration-200 hover:text-accent-foreground"
          >
            v3 (current)
          </a>
        </section>
        <section>
          <ThemeSwitch />
        </section>
      </div>
    </footer>
  )
}
