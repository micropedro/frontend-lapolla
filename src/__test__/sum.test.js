// sum.test.js
import { expect, test } from 'vitest'
import { notFalsy } from '../services/verify'

test('recibe 1 y retorna true', () => {
    expect(notFalsy(1)).toBe(true)
})

test('recibe 0 y retorna false', () => {
    expect(notFalsy(0)).toBe(false)
})

test('recibe "" y retorna false', () => {
    expect(notFalsy("")).toBe(false)
})

test('recibe "string" y retorna true', () => {
    expect(notFalsy("string")).toBe(true)
})
