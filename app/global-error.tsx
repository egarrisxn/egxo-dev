'use client'

interface AppError {
  error: Error
  reset: () => void
}

export default function GlobalError({ reset }: AppError) {
  return (
    <html>
      <body>
        <section className="grid min-h-screen w-full place-items-center">
          <div className="flex flex-auto flex-col items-center justify-center px-4 text-center sm:flex-row">
            <h1 className="text-5xl font-bold sm:mr-5 sm:border-r-2 sm:border-foreground sm:pr-5 sm:text-2xl">
              Error
            </h1>
            <p className="mt-3 text-lg text-accent-foreground sm:mt-0 sm:text-base">
              Seems there is a problem.
            </p>
            <button
              onClick={reset}
              className="mt-0.5 inline-flex h-8 shrink-0 items-center justify-center px-3 text-lg font-medium whitespace-nowrap text-foreground underline-offset-4 transition-all hover:underline sm:mt-0 sm:pl-1.5 sm:text-base"
            >
              Try Again
            </button>
          </div>
        </section>
      </body>
    </html>
  )
}
