import { createWithEqualityFn } from 'zustand/traditional'

const useReportesStore = createWithEqualityFn((set) => ({
    reportes: [],
    setReportes: (newReportes) => set(() => ({
        reportes: newReportes
    })),
    listType: false,
    setListType: (newListType) => set(() => ({
        listType: newListType
    })),
    reportesFiltered: [],
    setReportesFiltered: (newReportesF) => set(() => ({
        reportesFiltered: newReportesF
    })),
    polla: 0,
    setPolla: (newPolla) => set(() => ({
        polla: newPolla
    }))
}))

export default useReportesStore