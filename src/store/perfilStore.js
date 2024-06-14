import { createWithEqualityFn } from 'zustand/traditional'

const usePerfilStore = createWithEqualityFn((set) => ({
    modalAddMethod: false,
    setModalAddMethod: (newState) => set(() => ({
        modalAddMethod: newState
    })),
    show: false,
    setShow: (newState) => set(() => ({
        show: newState
    })),
    idMethod: "",
    setIdMethod: (newState) => set(() => ({
        idMethod: newState
    })),
    userMethods: [],
    setUserMethods: (newState) => set(() => ({
        userMethods: newState
    })),
    adminMethods: [],
    setAdminMethods: (newState) => set(() => ({
        adminMethods: newState
    })),
    idMethSelected:null,
    setIdMethSelected: (newState) => set(() => ({
        idMethSelected: newState
    }))
}))

export default usePerfilStore