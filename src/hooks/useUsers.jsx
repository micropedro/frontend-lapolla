import apiUrl from "../services/apiUrl"
import { useEffect } from "react"
import useUserStore from "../store/userStore"
import useModal from "../store/modalStore"
import useLoadingStore from "../store/loadingStore"
import request from "../services/request"
import useNotify from '../hooks/useNotify'
const useUsers = () => {
    const { notify } = useNotify()
    const { setLoading } = useLoadingStore()
    const { setVisible, setText, setUser } = useModal()
    const { users, setUsers } = useUserStore()

    const getUsers = async () => {
        setLoading(true)

        try {
            const users = await request.get(apiUrl + '/users')
            console.log(users)
            const usersList = users.data.body
            if (!usersList) throw 'Users not found'
            if (usersList.length > 0) setUsers(usersList)

        } catch (error) {
            const message = (JSON.parse(error.request.response).message)
            notify.error(message)
            console.log(message)

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