'use client'

import { useActionState } from 'react'

type State = { success?: boolean; error?: string } | null

async function submitContact(_prev: State, formData: FormData): Promise<State> {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nom: formData.get('nom'),
      email: formData.get('email'),
      telephone: formData.get('telephone'),
      type_projet: formData.get('type'),
      budget: formData.get('budget'),
      message: formData.get('msg'),
    }),
  })
  const data = await res.json()
  if (!res.ok) return { error: data.error ?? 'Une erreur est survenue.' }
  return { success: true }
}

const inputCls = 'w-full px-3.5 py-3 rounded border border-[#3a3a36] bg-[#26261f] text-white text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent'

export function ContactForm() {
  const [state, action, isPending] = useActionState(submitContact, null)

  if (state?.success) {
    return (
      <div className="bg-green-900/40 border border-green-700 text-green-200 p-4 rounded text-sm">
        Merci ! Votre demande a bien été envoyée. Nous vous recontactons sous 48&nbsp;h.
      </div>
    )
  }

  return (
    <form action={action} className="grid gap-4">
      {state?.error && (
        <div className="bg-red-900/40 border border-red-700 text-red-200 p-3 rounded text-sm">{state.error}</div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="nom" className="block text-xs text-[#cfccc4] mb-1.5">Nom *</label>
          <input id="nom" name="nom" required className={inputCls} />
        </div>
        <div>
          <label htmlFor="tel" className="block text-xs text-[#cfccc4] mb-1.5">Téléphone</label>
          <input id="tel" name="telephone" type="tel" className={inputCls} />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-xs text-[#cfccc4] mb-1.5">Email *</label>
        <input id="email" name="email" type="email" required className={inputCls} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="type" className="block text-xs text-[#cfccc4] mb-1.5">Type de projet</label>
          <select id="type" name="type" className={inputCls}>
            <option>Construction neuve</option>
            <option>Rénovation / extension</option>
            <option>Permis d&apos;urbanisme / suivi de chantier</option>
            <option>Conseil / expertise</option>
            <option>Autre</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-xs text-[#cfccc4] mb-1.5">Budget estimé</label>
          <select id="budget" name="budget" className={inputCls}>
            <option>À définir</option>
            <option>&lt; 100 000 €</option>
            <option>100 000 – 250 000 €</option>
            <option>250 000 – 500 000 €</option>
            <option>&gt; 500 000 €</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="msg" className="block text-xs text-[#cfccc4] mb-1.5">Votre projet</label>
        <textarea id="msg" name="msg" rows={4} placeholder="Décrivez votre projet, la localisation, vos délais..." className={`${inputCls} resize-y`} />
      </div>
      <button type="submit" disabled={isPending} className="bg-accent-dark border border-accent-dark text-white px-7 py-4 rounded font-semibold text-sm hover:bg-accent transition disabled:opacity-60 cursor-pointer disabled:cursor-not-allowed">
        {isPending ? 'Envoi en cours…' : 'Envoyer ma demande'}
      </button>
      <p className="text-xs text-[#9d9a92]">* champs obligatoires. Vos données restent confidentielles.</p>
    </form>
  )
}
