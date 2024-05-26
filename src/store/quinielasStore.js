import { createWithEqualityFn } from 'zustand/traditional'

const useQuinielasStore = createWithEqualityFn((set) => ({
    quinielas: [],
    setQuinielas: (newState) => set(() => ({
        quinielas: newState
    })),
    menu: 3,
    setMenu: (newMenu) => set(() => ({
        menu: newMenu
    })),
}))

export default useQuinielasStore