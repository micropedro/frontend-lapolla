import axios from "axios"
import apiUrl from "../services/apiUrl"
import { useEffect } from "react"
import useUserStore from "../store/userStore"
import useModal from "../store/modalStore"

const useUsers = () => {

    const { setVisible, setText, setUser } = useModal()
    const { users, setUsers } = useUserStore()

    const getUsers = async () => {
        const localToken = JSON.parse(localStorage.getItem('user'))
        if (localToken !== null) {
            const { token } = localToken
            axios.defaults.headers.get['Authorization'] = `Bearer ${token}`;
            const users = await axios.get(apiUrl + '/users')
            const usersList = users.data.response
            if (usersList.length > 0) setUsers(usersList)
        }
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
        getUsers
    }
}

export default useUsers