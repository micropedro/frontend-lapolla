import { createWithEqualityFn } from 'zustand/traditional'

const useReportStore = createWithEqualityFn((set) => ({
    report: {},
    reports: [],
    reportDate: "",
    setReportDate: (newReportDate) => set(() => ({
        reportDate: newReportDate
    })),
    setReport: (newReport) => set(() => ({
        report: newReport
    })),
    setReports: (newReports) => set(() => ({
        reports: newReports
    })),
    total: 0,
    setTotal: (newTotal) => set(() => ({
        total: newTotal
    })),

}))

export default useReportStore