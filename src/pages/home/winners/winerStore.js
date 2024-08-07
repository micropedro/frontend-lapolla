import { createWithEqualityFn } from 'zustand/traditional'

const useWinnerStore = createWithEqualityFn((set) => ({
    visible: false,
    setVisible: (newState) => set(() => ({
        visible: newState
    })),
    data: {},
    setData: (newState) => set(() => ({
        data: newState
    }))
}))

export default useWinnerStore