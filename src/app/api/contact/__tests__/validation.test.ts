import { describe, it, expect } from 'vitest'
import { validateContactPayload } from '../validate'

describe('validateContactPayload', () => {
  it('rejects missing nom', () => {
    expect(validateContactPayload({ nom: '', email: 'a@b.com' })).toBe('Nom et email sont obligatoires.')
  })

  it('rejects missing email', () => {
    expect(validateContactPayload({ nom: 'Alice', email: '' })).toBe('Nom et email sont obligatoires.')
  })

  it('rejects invalid email', () => {
    expect(validateContactPayload({ nom: 'Alice', email: 'not-an-email' })).toBe('Adresse email invalide.')
  })

  it('returns null for valid payload', () => {
    expect(validateContactPayload({ nom: 'Alice', email: 'alice@example.com' })).toBeNull()
  })
})
