import { createWithEqualityFn } from 'zustand/traditional'

const usePremiosStore = createWithEqualityFn((set) => ({
    premios: [],
    setPremios: (newPremios) => set(() => ({
        premios: newPremios
    })),
    modalDatos:false,
    setModalDatos: (newModalDatos) => set(() => ({
        modalDatos: newModalDatos
    })),
    typeModal: "",
    setTypeModal: (typeMOdal) => set(() => ({
        typeModal: typeMOdal
    })),
    premioSelected: "",
    setPremioSelected: (premio) => set(() => ({
        premioSelected: premio
    }))
}))

export default usePremiosStore