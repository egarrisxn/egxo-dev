import { LoaderIcon } from '@/components/icons'

export default function Loading() {
  return (
    <section className="grid min-h-screen w-full place-items-center">
      <div className="flex w-full flex-row items-center justify-center gap-3 px-4 py-6">
        <LoaderIcon className="size-6 animate-spin text-foreground" />
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    </section>
  )
}
