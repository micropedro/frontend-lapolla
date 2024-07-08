import { createWithEqualityFn } from 'zustand/traditional'

const useReportUserStore = createWithEqualityFn((set) => ({
    reportUser: false,
    setReportUser: (newReportUser) => set(() => ({
        reportUser: newReportUser
    })),
    dataTable: [],
    setDataTable: (newDataTable) => set(() => ({
        dataTable: newDataTable
    })),
}))

export default useReportUserStore