import { describe, it, expect, beforeEach } from 'vitest'
import { hashPassword, checkPassword } from '../auth'

describe('auth', () => {
  beforeEach(() => {
    process.env.ADMIN_PASSWORD = 'test-password-123'
  })

  it('hashPassword returns consistent sha256 hex', () => {
    const h1 = hashPassword('hello')
    const h2 = hashPassword('hello')
    expect(h1).toBe(h2)
    expect(h1).toHaveLength(64)
    expect(h1).toMatch(/^[a-f0-9]+$/)
  })

  it('checkPassword returns true for correct password', () => {
    expect(checkPassword('test-password-123')).toBe(true)
  })

  it('checkPassword returns false for wrong password', () => {
    expect(checkPassword('wrong')).toBe(false)
  })

  it('checkPassword returns false when ADMIN_PASSWORD not set', () => {
    delete process.env.ADMIN_PASSWORD
    expect(checkPassword('anything')).toBe(false)
  })
})
