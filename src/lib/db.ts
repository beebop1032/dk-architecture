import { put, list } from '@vercel/blob'

export interface Submission {
  id: string
  created_at: string
  nom: string
  email: string
  telephone: string | null
  type_projet: string | null
  budget: string | null
  message: string | null
}

export async function saveSubmission(data: {
  nom: string
  email: string
  telephone?: string
  type_projet?: string
  budget?: string
  message?: string
}): Promise<void> {
  const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
  const submission: Submission = {
    id,
    created_at: new Date().toISOString(),
    nom: data.nom,
    email: data.email,
    telephone: data.telephone ?? null,
    type_projet: data.type_projet ?? null,
    budget: data.budget ?? null,
    message: data.message ?? null,
  }
  await put(`submissions/${id}.json`, JSON.stringify(submission), {
    access: 'public',
    contentType: 'application/json',
  })
}

export async function getSubmissions(): Promise<Submission[]> {
  const { blobs } = await list({ prefix: 'submissions/' })
  if (blobs.length === 0) return []
  const submissions = await Promise.all(
    blobs.map(async (blob) => {
      const res = await fetch(blob.url)
      return res.json() as Promise<Submission>
    })
  )
  return submissions.sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  )
}
