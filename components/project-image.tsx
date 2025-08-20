import Image from 'next/image'

type ProjectImageProps = {
  href: string
  thumbnail: string
}

export function ProjectImage({ href, thumbnail }: ProjectImageProps) {
  return (
    <a href={href} target="_blank">
      <Image
        src={thumbnail}
        alt="Project Image"
        width={960}
        height={540}
        className="aspect-video w-full rounded-xl"
      />
    </a>
  )
}
