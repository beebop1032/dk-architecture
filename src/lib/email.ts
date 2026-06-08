import { Resend } from 'resend'

function getResend(): Resend {
  return new Resend(process.env.RESEND_API_KEY)
}

export async function sendContactEmail(data: {
  nom: string
  email: string
  telephone?: string
  type_projet?: string
  budget?: string
  message?: string
}): Promise<void> {
  const resend = getResend()
  await resend.emails.send({
    from: 'DK Architecture <noreply@resend.beebopcity.com>',
    to: 'fk@dkarchitecture.be',
    replyTo: data.email,
    subject: `Nouvelle demande de ${data.nom}`,
    html: `
      <h2 style="font-family:sans-serif">Nouvelle demande de contact</h2>
      <p><strong>Nom :</strong> ${data.nom}</p>
      <p><strong>Email :</strong> ${data.email}</p>
      ${data.telephone ? `<p><strong>Téléphone :</strong> ${data.telephone}</p>` : ''}
      ${data.type_projet ? `<p><strong>Type de projet :</strong> ${data.type_projet}</p>` : ''}
      ${data.budget ? `<p><strong>Budget :</strong> ${data.budget}</p>` : ''}
      ${data.message ? `<p><strong>Message :</strong></p><p>${data.message.replace(/\n/g, '<br>')}</p>` : ''}
      <hr>
      <p style="color:#999;font-size:12px">Envoyé via dkarchitecture.be</p>
    `,
  })
}
