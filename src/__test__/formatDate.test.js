// sum.test.js
import { expect, test } from 'vitest'
import { formatDate2 } from '../services/formatDate'
import { formatHour } from '../pages/admin/ventas/utils'

test('recibe 1 y retorna true', () => {
    const date = new Date('2024-06-01T00:00:00.000+00:00')
    const formated = formatDate2(date)
    console.log(formated)
    expect(formated).toBe("01-06-2024")
})

test("recibe hora en numero retorna string de hora", () => {
    const hora = 11
    const our = formatHour(hora)
    expect(our).toBe(`${hora}:00 AM`)
}) 

test("recibe hora en numero retorna string de hora", () => {
    const hora = 12
    const our = formatHour(hora)
    expect(our).toBe(`${hora}:00 PM`)
})

test("recibe hora en numero retorna string de hora", () => {
    const hora = 13
    const our = formatHour(hora)
    console.log(our)
    expect(our).toBe(`${String(hora - 12).padStart(2,'0')}:00 PM`)
}) 
