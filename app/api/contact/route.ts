import { type NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const email_user = process.env.NODEMAILER_EMAIL
const email_password = process.env.NODEMAILER_PASSWORD

export async function POST(req: NextRequest) {
  const { email, name, message } = await req.json()

  const transport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: email_user,
      pass: email_password,
    },
  })

  const mailOptions = {
    from: email_user,
    to: email_user,
    subject: `Message from ${name} (${email})`,
    text: message,
  }

  try {
    await transport.sendMail(mailOptions)
    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (err) {
    console.error('Error sending email:', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
