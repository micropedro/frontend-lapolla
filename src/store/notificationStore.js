import { createWithEqualityFn } from 'zustand/traditional'

const useNotificationStore = createWithEqualityFn((set) => ({
    text: "No text",
    notification: false,
    setNotification: (newState) => set(() => ({
        notification: newState
    })),
    setText: (newText) => set(() => ({
        text: newText
    })),
    closeNotification: () => set(() => ({
        notification: false
    }))
}))

export default useNotificationStore