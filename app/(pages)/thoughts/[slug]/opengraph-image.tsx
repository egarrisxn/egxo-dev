import {ImageResponse} from 'next/og'

export const alt = ''
export const size = {width: 1200, height: 630}
export const contentType = 'image/png'
export const runtime = 'edge'

// eslint-disable-next-line import/no-anonymous-default-export
export default async function ({params}: {params: {slug: string}}): Promise<ImageResponse> {
  const res = await fetch(
    `https://raw.githubusercontent.com/egarrisxn/egxo-dev/main/thoughts/${params.slug}.mdx`,
  )

  if (!res.ok) {
    return new Response('Not found', {status: 404})
  }

  const text = await res.text()
  const title = text.match(/title: (.*)/)?.[1]
  const date = text.match(/date: (.*)/)?.[1]

  if (!title) {
    return new Response('Missing title', {status: 400})
  }

  const fontData = await fetch(new URL('../../../fonts/Inter-Medium.ttf', import.meta.url)).then(
    (res) => res.arrayBuffer(),
  )

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          background: '#000000',
          flexDirection: 'column',
          border: '8px solid #DCDCDC',
          borderRadius: '4px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            width: '100%',
            padding: '8px 0px 0px 10px',
          }}
        >
          <span
            style={{
              fontSize: 25,
              color: '#FFFFFF',
              padding: '8px 0px 0px 10px',
            }}
          >
            egxo
            <span
              style={{
                color: '#87CEEB',
              }}
            >
              .dev
            </span>
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '0 100px',
            color: '#87CEEB',
            textAlign: 'center',
            height: 630 - 50 - 50,
            maxWidth: 1000,
            fontSize: 50,
          }}
        >
          {title && (
            <div
              style={{
                lineHeight: 1,
                marginBottom: 40,
              }}
            >
              {title}
            </div>
          )}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            width: '100%',
            padding: '0px 10px 8px 0px',
          }}
        >
          {date && (
            <span
              style={{
                fontSize: 25,
                color: '#FFFFFF',
                padding: '0px 10px 8px 0px',
              }}
            >
              {date}
            </span>
          )}
        </div>
      </div>
    ),
    {
      fonts: [
        {
          name: 'InterMedium',
          data: fontData,
          style: 'normal',
          weight: 500,
        },
      ],
      width: 1200,
      height: 630,
    },
  )
}
