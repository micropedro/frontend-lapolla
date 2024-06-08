export function verify(arrayData) {
    const length = arrayData.length
    const filtered = arrayData.filter((data) => data)
    if (length !== filtered.length) return false
    return true
}

export const notFalsy = (data) => data ? true : false
