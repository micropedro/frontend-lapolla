// sum.test.js
import { expect, test } from 'vitest'
import { formatDate2 } from '../services/formatDate'

test('recibe 1 y retorna true', () => {
    const date = new Date('2024-06-01T00:00:00.000+00:00')
    const formated = formatDate2(date)
    console.log(formated)
    expect(formated).toBe("01-06-2024")
})