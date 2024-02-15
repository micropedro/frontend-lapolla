import { createWithEqualityFn } from 'zustand/traditional'

const useLoadingStore = createWithEqualityFn((set) => ({
    loading: false,
    setLoading: (newLoading) => set(() => ({
        loading: newLoading
    }))
}))

export default useLoadingStore