import { redirect } from 'next/navigation'
import { getSubmissions } from '@/lib/db'
import { clearAdminCookie } from '@/lib/auth'

export const dynamic = 'force-dynamic'

export default async function AdminPage() {
  const submissions = await getSubmissions()

  async function logout() {
    'use server'
    await clearAdminCookie()
    redirect('/admin/login')
  }

  return (
    <div className="min-h-dvh bg-paper">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-ink">Demandes de contact</h1>
            <p className="text-sm text-ink-soft mt-1">{submissions.length} demande{submissions.length !== 1 ? 's' : ''}</p>
          </div>
          <form action={logout}>
            <button type="submit" className="text-sm text-ink-soft hover:text-ink border border-line px-4 py-2 rounded transition cursor-pointer">
              Déconnexion
            </button>
          </form>
        </div>

        {submissions.length === 0 ? (
          <p className="text-ink-soft">Aucune demande pour l&apos;instant.</p>
        ) : (
          <div className="grid gap-3">
            {submissions.map(s => (
              <details key={s.id} className="border border-line rounded p-4 bg-white">
                <summary className="cursor-pointer flex items-center justify-between gap-4 list-none">
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-semibold text-ink text-sm truncate">{s.nom}</span>
                    <span className="text-ink-soft text-sm truncate">{s.email}</span>
                    <span className="text-ink-soft text-xs hidden sm:block">{s.type_projet}</span>
                  </div>
                  <span className="text-xs text-ink-soft flex-none">
                    {new Date(s.created_at).toLocaleDateString('fr-BE', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-line grid gap-2 text-sm">
                  {s.telephone && <p><strong>Téléphone :</strong> <a href={`tel:${s.telephone}`} className="text-accent-dark">{s.telephone}</a></p>}
                  {s.budget && <p><strong>Budget :</strong> {s.budget}</p>}
                  {s.message && <p><strong>Message :</strong><br /><span className="text-ink-soft whitespace-pre-wrap">{s.message}</span></p>}
                </div>
              </details>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
