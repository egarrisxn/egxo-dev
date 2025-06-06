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

      <section>
        <p>Standard US Letter Format</p>
        <object data='/other/EG-US-RESUME-2025.pdf' type='application/pdf' className={styles.pdfUS}>
          <p>
            Your browser does not support PDFs.
            <a href='/other/EG-US-RESUME-2025.pdf' download>
              Download the resume
            </a>
            .
          </p>
        </object>
      </section>

      <section>
        <p>Standard A4 Format</p>
        <object data='/other/EG-A4-RESUME-2025.pdf' type='application/pdf' className={styles.pdfA4}>
          <p>
            Your browser does not support PDFs.
            <a href='/other/EG-A4-RESUME-2025.pdf' download>
              Download the resume
            </a>
            .
          </p>
        </object>
      </section>

      <br />
    </>
  )
}

// import styles from './resume.module.css'

// export const metadata = {
//   title: 'Resume',
//   description: 'My current resume.',
//   alternates: {
//     canonical: 'https://egxo.dev/resume',
//   },
// }

// export default function ResumePage() {
//   return (
//     <>
//       <header>
//         <h1>My resume _</h1>
//       </header>
//       <p>Standard US Letter Format</p>
//       <iframe
//         src='other/EG-US-RESUME-2025.pdf'
//         title='EG US RESUME 2025'
//         className={styles.us}
//       ></iframe>
//       <br />
//       <br />
//       <p>Standard A4 Format</p>
//       <iframe
//         src='other/EG-A4-RESUME-2025.pdf'
//         title='EG A4 RESUME 2025'
//         className={styles.a4}
//       ></iframe>
//     </>
//   )
// }
