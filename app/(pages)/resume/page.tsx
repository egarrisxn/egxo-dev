import styles from './resume.module.css'

export const metadata = {
  title: 'Resume',
  description: 'My current resume.',
  alternates: {
    canonical: 'https://egxo.dev/resume',
  },
}

export default function ResumePage() {
  return (
    <>
      <header>
        <h1>My resume _</h1>
      </header>
      <p>Standard US Letter Format</p>
      <iframe
        src='other/EG-US-RESUME-2025.pdf'
        title='EG US RESUME 2025'
        className={styles.iframe}
      ></iframe>
      <br />
      <br />
      <p>Standard A4 Format</p>
      <iframe
        src='other/EG-A4-RESUME-2025.pdf'
        title='EG A4 RESUME 2025'
        className={styles.iframe}
      ></iframe>
    </>
  )
}
