import { createWithEqualityFn } from 'zustand/traditional'

const useTicketStore = createWithEqualityFn((set) => ({
    animals: [],
    setAnimals: (newAnimals) => set(() => ({
        animals: newAnimals
    })),
    visible: false,
    setVisible: (newVisible) => set(() => ({
        visible: newVisible
    })),
    type: false,
    setType: (newType) => set(() => ({
        type: newType
    }))
}))

export default useTicketStore