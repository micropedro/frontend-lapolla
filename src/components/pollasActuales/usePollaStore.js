import { createWithEqualityFn } from 'zustand/traditional'

const usePollasStore = createWithEqualityFn((set) => ({
    pollas:{mini:0,gran:0},
    setPollas: (newData) => set(() => ({
        pollas: {...newData }
    }))
}))

export default usePollasStore