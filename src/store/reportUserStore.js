import { createWithEqualityFn } from 'zustand/traditional'

const useReportUserStore = createWithEqualityFn((set) => ({
    reportUser: false,
    setReportUser: (newReportUser) => set(() => ({
        reportUser: newReportUser
    }))
}))

export default useReportUserStore