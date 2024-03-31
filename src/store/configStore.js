import { createWithEqualityFn } from 'zustand/traditional'

const useConfigStore = createWithEqualityFn((set) => ({
    config: {
        premioCasa: 0,
        precioGranQuiniela: 0,
        precioMiniQuiniela: 0,
        horaGranQuiniela: 0,
        horasMiniQuiniela: [0],
    },
    setConfig: (newConfig) => set(() => ({
        config: newConfig
    }))
}))

export default useConfigStore