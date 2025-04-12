export async function sendEmail(data) {
  try {
    const apiEndpoint = '/api/nodemailer'
    const res = await fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const response = await res.json()
    alert(response.message)
  } catch (err) {
    alert(`Failed to send email: ${err}`)
  }
}
