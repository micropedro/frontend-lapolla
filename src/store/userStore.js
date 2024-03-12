import { createWithEqualityFn } from 'zustand/traditional'

const useUserStore = createWithEqualityFn((set) => ({
    user: { _id: '' },
    setUser: (newUser) => set(() => ({
        user: newUser
    })),
    users: [],
    setUsers: (newUsers) => set(() => ({
        users: newUsers
    }))
}))

export default useUserStore