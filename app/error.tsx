'use client'

import Button from './components/button'

export default function Error({error, reset}: {error: Error; reset: () => void}) {
  return (
    <article>
      <h1>Oh no! Something went wrong.</h1>
      <p>If you feel there was a mistake, please contact me: (egarrisxn@gmail.com).</p>
      <Button onClick={reset}>Try again</Button>
      <pre>{error.message}</pre>
    </article>
  )
}
