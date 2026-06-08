import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/admin/login') return NextResponse.next()

  const session = request.cookies.get('admin_session')
  const expected = process.env.ADMIN_PASSWORD
  if (!expected || !session) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }
  const hash = createHash('sha256').update(expected).digest('hex')
  if (session.value !== hash) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }
  return NextResponse.next()
}

export const config = { matcher: ['/admin/:path*'] }
