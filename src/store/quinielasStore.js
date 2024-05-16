import { createWithEqualityFn } from 'zustand/traditional'

const useQuinielasStore = createWithEqualityFn((set) => ({
    quinielas: [],
    setQuinielas: (newState) => set(() => ({
        quinielas: newState
    }))
}))

export default useQuinielasStore