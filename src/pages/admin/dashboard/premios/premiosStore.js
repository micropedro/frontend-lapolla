import { createWithEqualityFn } from 'zustand/traditional'

const usePremiosStore = createWithEqualityFn((set) => ({
    premios: [],
    setPremios: (newPremios) => set(() => ({
        premios: newPremios
    })),
    modalDatos:true,
    setModalDatos: (newModalDatos) => set(() => ({
        modalDatos: newModalDatos
    })),
}))

export default usePremiosStore