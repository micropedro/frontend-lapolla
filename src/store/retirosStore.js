import { createWithEqualityFn } from 'zustand/traditional'

const useRetiroStore = createWithEqualityFn((set) => ({
    retiros: [],
    retiro: {},
    findedUser: { state: 1 },
    userSelected: null,
    modal: false,
    setUserSelected: (newUserSelected) => set(() => ({
        userSelected: newUserSelected
    })),
    setFindedUser: (newFindedUser) => set(() => ({
        findedUser: newFindedUser
    })),
    setRetiros: (newRetiros) => set(() => ({
        retiros: newRetiros
    })),
    setRetiro: (newRetiro) => set(() => ({
        retiro: newRetiro
    })),
    setModal: (newModal) => set(() => ({
        modal: newModal
    }))
}))

export default useRetiroStore