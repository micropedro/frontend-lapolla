import { createWithEqualityFn } from 'zustand/traditional'

const useDepositStore = createWithEqualityFn((set) => ({
    deposits: [],
    deposit: {},
    findedUser: { state: 1 },
    userSelected: null,
    modal: false,
    setUserSelected: (newUserSelected) => set(() => ({
        userSelected: newUserSelected
    })),
    setFindedUser: (newFindedUser) => set(() => ({
        findedUser: newFindedUser
    })),
    setDeposits: (newDeposits) => set(() => ({
        deposits: newDeposits
    })),
    setDeposit: (newDeposit) => set(() => ({
        deposit: newDeposit
    })),
    setModal: (newModal) => set(() => ({
        modal: newModal
    }))
}))

export default useDepositStore