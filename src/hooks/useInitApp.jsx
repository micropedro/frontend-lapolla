import useUser from './useUser'
import useErrorManager from './useErrorManager'
const useInitApp = () => {
    const errorManager = useErrorManager()
    const { getUser, setUser } = useUser()

    const initApp = async () => {

        try {

            const localUser = localStorage.getItem('user')
            const user = localUser ? JSON.parse(localUser) : false

            if (user) {
                const res = await getUser(user._id)
                const newUser = { ...res, token: user.token }
                if (res) localStorage.setItem('user', JSON.stringify(newUser))
                setUser(newUser)
            } else {
                localStorage.removeItem('user')
            }
        } catch (error) {
            errorManager(error)
        }

    }

    return {
        initApp
    }
}
export default useInitApp