import axios from "axios"
import apiUrl from "../services/apiUrl"
import { useEffect } from "react"
import useUserStore from "../store/userStore"
/* import useUserStore from "../store/userStore" */
const Users = () => {
    const { users, setUsers } = useUserStore()
    const getUsers = async () => {

        const {token} = JSON.parse(localStorage.getItem('user'))
        axios.defaults.headers.get['Authorization'] = `Bearer ${token}`;
        const users = await axios.get(apiUrl + '/users')
        const usersList = users.data.response
        if (usersList.length > 0)
            setUsers(usersList)
        else
            setUsers([])
    }

    useEffect(() => { getUsers() }, []);



    /* const {user} = useUserStore() */
    return (<>
        Users
        {users && users.map((i, index) => {
            return (<div key={index}>
                {i.name}
            </div>)
        })}
    </>)

}
export default Users