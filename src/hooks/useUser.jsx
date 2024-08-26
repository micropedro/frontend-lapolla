/* eslint-disable react-hooks/exhaustive-deps */
import urlApi from "../services/urlApi"
import useLoadingStore from "../store/loadingStore"
import request from "../services/request"
import useErrorManager from "./useErrorManager"
import useUserStore from "../store/userStore"
const useUsers = () => {
    const { user, setUser } = useUserStore()
    const { setLoading } = useLoadingStore()
    const errorManager = useErrorManager()

    const getUser = async (idUser) => {
        try {
            setLoading(true)
            const res = await request.get(urlApi + '/user/' + idUser)
            const user = res.data.body
            if (!user) throw 'usuario no encontrado'
            return user
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    const actualizeUserBalance = async () => {
        const userData = await getUser(user._id)
        console.log(userData)
        const newBalance = userData.balance
        const token = JSON.parse(localStorage.getItem('user')).token
        userData.token = token
        setUser({ ...userData, balance: newBalance })
    }

    return {
        getUser,
        user,
        setUser,
        actualizeUserBalance
    }
}

export default useUsers