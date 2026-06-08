import { redirect } from 'next/navigation'
import { checkPassword, setAdminCookie } from '@/lib/auth'

export default async function LoginPage() {
  async function login(formData: FormData) {
    'use server'
    const password = formData.get('password') as string
    if (checkPassword(password)) {
      await setAdminCookie()
      redirect('/admin')
    }
    redirect('/admin/login?error=1')
  }

  return (
    <div className="min-h-dvh bg-paper flex items-center justify-center px-4">
      <div className="bg-white border border-line rounded p-8 w-full max-w-sm">
        <h1 className="text-xl font-semibold mb-6 text-ink">Admin DK Architecture</h1>
        <form action={login} className="grid gap-4">
          <div>
            <label htmlFor="pw" className="block text-sm text-ink-soft mb-1.5">Mot de passe</label>
            <input id="pw" name="password" type="password" required autoFocus autoComplete="current-password"
              className="w-full px-3.5 py-3 rounded border border-line bg-paper text-ink text-sm focus:outline-none focus:ring-2 focus:ring-accent-dark focus:border-accent-dark" />
          </div>
          <button type="submit" className="bg-ink text-white py-3 rounded font-semibold text-sm hover:bg-accent-dark transition cursor-pointer">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  )
}
