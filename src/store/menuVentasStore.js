import { createWithEqualityFn } from 'zustand/traditional'
import permisions from '../services/permissions'
const userLevel = permisions.getUser().level
const useMenuVentas = createWithEqualityFn((set) => ({
    menu: userLevel === 4 ? "Taquilla" : "Pagos",
    setMenu: (newMenuVentas) => set(() => ({
        menu: newMenuVentas
    }))
}))

export default useMenuVentas