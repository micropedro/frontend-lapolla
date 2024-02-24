import { createWithEqualityFn } from 'zustand/traditional'

const useTemporalPass = createWithEqualityFn((set) => ({
    temporalPass: false,
    setTemporalPass: (newTemporalPass) => set(() => ({
        temporalPass: newTemporalPass
    }))
}))

export default useTemporalPass