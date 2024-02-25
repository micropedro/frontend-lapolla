import { createWithEqualityFn } from 'zustand/traditional'

const useLoadingModalStore = createWithEqualityFn((set) => ({
    loading: false,
    setLoading: (newLoading) => set(() => ({
        loading: newLoading
    })),
    text: false,
    setText: (newText) => set(() => ({
        text: newText
    }))
}))

export default useLoadingModalStore