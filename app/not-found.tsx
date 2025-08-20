import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="grid min-h-screen w-full place-items-center">
      <div className="flex flex-auto flex-col items-center justify-center px-4 text-center sm:flex-row">
        <h1 className="text-7xl font-bold sm:mr-5 sm:border-r-2 sm:border-foreground sm:pr-5 sm:text-2xl">
          404
        </h1>
        <p className="mt-3 text-lg text-accent-foreground sm:mt-0 sm:text-base">
          Page could not be found.
        </p>
        <Link href="/" className="mt-0.5 sm:mt-0">
          <button className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md px-3 text-lg font-medium whitespace-nowrap text-foreground underline-offset-4 transition-all outline-none hover:underline sm:text-base">
            Return Home
          </button>
        </Link>
      </div>
    </section>
  )
}
