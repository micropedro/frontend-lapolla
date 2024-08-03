import { createWithEqualityFn } from 'zustand/traditional'

const useModalStore = createWithEqualityFn((set) => ({
    visible: false,
    setVisible: (newState) => set(() => ({
        visible: newState
    })),
    data: {},
    setData: (newData) => set(() => ({
        data: newData
    }))
}))

export default useModalStore