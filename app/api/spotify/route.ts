import {NextResponse} from 'next/server'

export async function POST() {
  const client_id = process.env.SPOTIFY_CLIENT_ID
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

  if (!client_id || !client_secret || !refresh_token) {
    return NextResponse.json({error: 'Missing Spotify credentials'}, {status: 400})
  }

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  const data = await response.json()

  if (response.ok) {
    return NextResponse.json(data)
  }
  return NextResponse.json(data, {status: response.status})
}
