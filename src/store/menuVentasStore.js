import { createWithEqualityFn } from 'zustand/traditional'

const useMenuVentas = createWithEqualityFn((set) => ({
    menu: "Taquilla",
    setMenu: (newMenuVentas) => set(() => ({
        menu: newMenuVentas
    }))
}))

export default useMenuVentas