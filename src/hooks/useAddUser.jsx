import axios from "axios"
import APIURL from "../services/APIURL"
import { useNavigate } from "react-router-dom"
import useLoadingModalStore from "../store/loadingModalStore"
import useNotify from "./useNotify"
const useAddUsers = () => {
    const { notify } = useNotify()
    const { setLoading, setText } = useLoadingModalStore()
    const navigate = useNavigate()
    const sendUserForm = async (e) => {
        setLoading(true)
        setText('Agregando usuario')
        e.preventDefault()
        const user = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            ci: e.target.ci.value,
            level: e.target.level.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        try {

            const savedUser = await axios.post(APIURL + '/register', user)
            if (!savedUser) throw 'No se a podido registrar el usuario'
            navigate('/dashboard/users')
            setLoading(false)
        } catch (error) {
            setLoading(false)
            notify.error(error.response.data.message)
        }

        /*  const localToken = JSON.parse(localStorage.getItem('user'))
         if (localToken !== null) {
             const { token } = localToken
             axios.defaults.headers.get['Authorization'] = `Bearer ${token}`;
             const users = await axios.get(APIURL + '/users')
             const usersList = users.data.response
             console.log(usersList)
         } */
    }

    return {
        sendUserForm
    }
}

export default useAddUsers