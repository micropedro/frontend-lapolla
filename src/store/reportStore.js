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

}))

export default useReportStore