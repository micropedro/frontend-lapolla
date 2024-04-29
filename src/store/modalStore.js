import { createWithEqualityFn } from 'zustand/traditional'

const useModalStore = createWithEqualityFn((set) => ({
    visible: false,
    setVisible: (newvisible) => set(() => ({
        visible: newvisible
    })),
    text: "Texto por defecto",
    setText: (newtext) => set(() => ({
        text: newtext
    })),
    clickEvent: ()=>{},
    setClickEvent: (newClickEvent) => set(() => ({
        clickEvent: newClickEvent
    })),
    ButtonText: "button text default",
    setButtonText: (newtext) => set(() => ({
        ButtonText: newtext
    })),
    user: false,
    setUser: (newuser) => set(() => ({
        user: newuser
    })),
}))

export default useModalStore