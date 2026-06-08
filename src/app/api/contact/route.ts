import { NextRequest, NextResponse } from 'next/server'
import { validateContactPayload } from './validate'
import { saveSubmission } from '@/lib/db'
import { sendContactEmail } from '@/lib/email'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { nom, email, telephone, type_projet, budget, message } = body

  const error = validateContactPayload({ nom, email })
  if (error) return NextResponse.json({ error }, { status: 400 })

  try {
    await Promise.all([
      sendContactEmail({ nom, email, telephone, type_projet, budget, message }),
      saveSubmission({ nom, email, telephone, type_projet, budget, message }),
    ])
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[contact] error:', err)
    return NextResponse.json({ error: 'Une erreur est survenue. Veuillez réessayer.' }, { status: 500 })
  }
}
