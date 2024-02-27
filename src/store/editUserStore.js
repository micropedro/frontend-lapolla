import { createWithEqualityFn } from 'zustand/traditional'

const useEditUserStore = createWithEqualityFn((set) => ({
    editUser:{},
    setEditUser: (newUser) => set(() => ({
        editUser: newUser
    }))
}))

export default useEditUserStore