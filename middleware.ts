import { NextRequest, NextResponse } from 'next/server'

async function hashForEdge(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/admin/login') return NextResponse.next()

  const session = request.cookies.get('admin_session')
  const expected = process.env.ADMIN_PASSWORD
  if (!expected || !session) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }
  const hash = await hashForEdge(expected)
  if (session.value !== hash) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }
  return NextResponse.next()
}

export const config = { matcher: ['/admin/:path*'] }
