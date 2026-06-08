import { sql } from '@vercel/postgres'

export interface Submission {
  id: number
  created_at: string
  nom: string
  email: string
  telephone: string | null
  type_projet: string | null
  budget: string | null
  message: string | null
  lu: boolean
}

export async function saveSubmission(data: {
  nom: string
  email: string
  telephone?: string
  type_projet?: string
  budget?: string
  message?: string
}): Promise<void> {
  await sql`
    INSERT INTO submissions (nom, email, telephone, type_projet, budget, message)
    VALUES (${data.nom}, ${data.email}, ${data.telephone ?? null},
            ${data.type_projet ?? null}, ${data.budget ?? null}, ${data.message ?? null})
  `
}

export async function getSubmissions(): Promise<Submission[]> {
  const result = await sql<Submission>`SELECT * FROM submissions ORDER BY created_at DESC`
  return result.rows
}

export async function markAsRead(id: number, lu: boolean): Promise<void> {
  await sql`UPDATE submissions SET lu = ${lu} WHERE id = ${id}`
}
