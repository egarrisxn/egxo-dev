import {ImageResponse} from 'next/og'

export const size = {width: 1200, height: 630}
export const alt = ''
export const contentType = 'image/png'
export const runtime = 'edge'

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (): Promise<ImageResponse> {
  const fontData = await fetch(new URL('./fonts/Inter-Medium.ttf', import.meta.url)).then((res) =>
    res.arrayBuffer(),
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
            color: '#FFFFFF',
            textAlign: 'center',
            height: 630 - 50 - 50,
            maxWidth: 1000,
            fontSize: 50,
            marginBottom: 40,
          }}
        >
          Full Stack Developer.
          <span
            style={{
              color: '#87CEEB',
            }}
          >
            Digitial Product Designer.
          </span>
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
          <span
            style={{
              fontSize: 25,
              color: '#FFFFFF',
              padding: '0px 10px 8px 0px',
            }}
          >
            MMXXV
          </span>
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
