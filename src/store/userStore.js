import { createWithEqualityFn } from 'zustand/traditional'

const useUserStore = createWithEqualityFn((set) => ({
    user:{},
    setUser: (newUser) => set(() => ({
        user: newUser
    })),
    users:[],
    setUsers:(newUsers)=> set(() => ({
        users: newUsers
    }))
}))

export default useUserStore