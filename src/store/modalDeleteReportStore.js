import { createWithEqualityFn } from 'zustand/traditional'

const useModalDeleteReportStore = createWithEqualityFn((set) => ({
    visibleDeleteReport: false,
    setVisibleDeleteReport: (newvisible) => set(() => ({
        visibleDeleteReport: newvisible
    })),
    textDeleteReport: "Texto por defecto",
    setTextDeleteReport: (newtext) => set(() => ({
        textDeleteReport: newtext
    })),
    clickEventDeleteReport: () => { },
    setClickEventDeleteReport: (newClickEvent) => set(() => ({
        clickEventDeleteReport: newClickEvent
    })),
    buttonTextDeleteReport: "button text default",
    setButtonTextDeleteReport: (newtext) => set(() => ({
        buttonTextDeleteReport: newtext
    }))
}))

export default useModalDeleteReportStore