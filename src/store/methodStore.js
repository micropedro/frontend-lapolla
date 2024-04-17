import { createWithEqualityFn } from 'zustand/traditional'

const useLoadingStore = createWithEqualityFn((set) => ({
    defaultMethod: {},
    setDefaultMethod: (newDefaultMethod) => set(() => ({
        defaultMethod: newDefaultMethod
    }))
}))

export default useLoadingStore