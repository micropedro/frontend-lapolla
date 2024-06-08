import { createWithEqualityFn } from 'zustand/traditional'

const useAnimalsStore = createWithEqualityFn((set) => ({
    animals: [],
    setAnimals: (newAnimals) => set(() => ({
        animals: newAnimals
    })),
}))

export default useAnimalsStore