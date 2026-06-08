import { createHash } from 'crypto'
import { cookies } from 'next/headers'

const COOKIE = 'admin_session'

export function hashPassword(password: string): string {
  return createHash('sha256').update(password).digest('hex')
}

export function checkPassword(input: string): boolean {
  const expected = process.env.ADMIN_PASSWORD
  if (!expected) return false
  return hashPassword(input) === hashPassword(expected)
}

export async function setAdminCookie(): Promise<void> {
  const store = await cookies()
  store.set(COOKIE, hashPassword(process.env.ADMIN_PASSWORD!), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  })
}

export async function clearAdminCookie(): Promise<void> {
  const store = await cookies()
  store.delete(COOKIE)
}

export async function isAdminAuthenticated(): Promise<boolean> {
  const store = await cookies()
  const session = store.get(COOKIE)
  if (!session) return false
  return session.value === hashPassword(process.env.ADMIN_PASSWORD!)
}
