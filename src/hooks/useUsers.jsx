import axios from "axios"
import apiUrl from "../services/apiUrl"
import { useEffect } from "react"
import useUserStore from "../store/userStore"
import useModal from "../store/modalStore"
import useLoadingStore from "../store/loadingStore"
const useUsers = () => {
    const { setLoading } = useLoadingStore()
    const { setVisible, setText, setUser } = useModal()
    const { users, setUsers } = useUserStore()

    const getUsers = async () => {
        setLoading(true)
        const localToken = JSON.parse(localStorage.getItem('user'))
        try {
            if (localToken !== null) {
                const { token } = localToken
                axios.defaults.headers.get['Authorization'] = `Bearer ${token}`;
                const users = await axios.get(apiUrl + '/users')
                const usersList = users.data.body
                if (!usersList) throw 'Users not found'
                if (usersList.length > 0) setUsers(usersList)
            }
        } catch (error) {
            console.log(error.message || error)
        }
        setLoading(false)
    }

    const deleteModal = (user) => {
        setText('Esta seguro que desea eliminar este usuario?')
        setVisible(true)
        setUser(user)
    }

    useEffect(() => { getUsers() }, []);

    return {
        users,
        deleteModal,
        getUsers,
    }
}

export default useUsers