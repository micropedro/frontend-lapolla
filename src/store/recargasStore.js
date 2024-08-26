import { createWithEqualityFn } from 'zustand/traditional'

const useRecargasStore = createWithEqualityFn((set) => ({
    userRecharge: false,
    setUserRecharge: (newState) => set(() => ({
        userRecharge: newState
    })),
    userCi: "",
    setUserCi: (newState) => set(() => ({
        userCi: newState
    })),
    modal: false,
    setModal: (newState) => set(() => ({
        modal: newState
    })),
    amountToRecharge: undefined,
    setAmountToRecharge: (newState) => set(() => ({
        amountToRecharge: newState
    }))
}))

export default useRecargasStore