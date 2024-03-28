export function verify(arrayData) {
    const lenght = arrayData.length
    const filtered = arrayData.filter((data) => data)
    if (lenght !== filtered.length) return false
    return true
}

export const notFalsy = (data) => data ? true : false
