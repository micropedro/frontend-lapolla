import axios from "axios"
import apiUrl from "../services/apiUrl"
import { useEffect } from "react"
import useUserStore from "../store/userStore"
const useUsers = () => {
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

    useEffect(() => { getUsers() }, []);

    return {
        users
    }
}

export default useUsers