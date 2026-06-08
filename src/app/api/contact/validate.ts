export function validateContactPayload(data: { nom?: string; email?: string }): string | null {
  if (!data.nom?.trim() || !data.email?.trim()) return 'Nom et email sont obligatoires.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return 'Adresse email invalide.'
  return null
}
