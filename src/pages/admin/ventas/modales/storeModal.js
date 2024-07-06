import { createWithEqualityFn } from 'zustand/traditional'

const storeModal = createWithEqualityFn((set) => ({
    visible: false,
    setVisible: (newState) => set(() => ({
        visible: newState
    })),
    closeModal: () => set(() => ({
        visible: false
    })),
    dataModal: {},
    setDataModal: (newState) => set(() => ({
        dataModal: newState
    })),
    methods: [],
    setMethods: (newState) => set(() => ({
        methods: newState
    })),
    userToPay: {},
    setUserToPay: (newState) => set(() => ({
        userToPay: newState
    })),
    selectMethod: "0",
    setSelectMethod: (newState) => set(() => ({
        selectMethod: newState
    }))
}))

export default storeModal