import { createWithEqualityFn } from 'zustand/traditional'

const useTicketStore = createWithEqualityFn((set) => ({
    animals: [],
    setAnimals: (newAnimals) => set(() => ({
        animals: newAnimals
    })),
    visible: false,
    setVisible: (newVisible) => set(() => ({
        visible: newVisible
    }))
}))

export default useTicketStore