import { createWithEqualityFn } from 'zustand/traditional'

const useUserStore = createWithEqualityFn((set) => {

    const storedUser = JSON.parse(localStorage.getItem('user'));

    const initialState = {
        user: storedUser || { _id: '', level: 0 },
    };

    return {
        ...initialState,
        setUser: (newUser) => set(() => ({
            user: newUser
        })),
        users: [],
        setUsers: (newUsers) => set(() => ({
            users: newUsers
        }))
    }
})

export default useUserStore