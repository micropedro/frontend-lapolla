import urlApi from '../services/urlApi'
import { useNavigate } from 'react-router-dom'
import useUserStore from '../store/userStore'
import { useState } from 'react'
import useLoadingStore from '../store/loadingStore'
import useNotify from './useNotify'
import request from "../services/request"
const useLogin = () => {
    const { notify } = useNotify()
    const { setLoading } = useLoadingStore()
    const navigate = useNavigate()
    const { setUser } = useUserStore()
    /*  const { setNotification, setText } = useNotificationStore() */
    const [eye, setEye] = useState(false)

    const login = async (e) => {
        e.preventDefault()
        setLoading(true)
        const email = e.target.email.value
        const password = e.target.password.value
        const data = { email, password }
        const url = urlApi + '/login'

        if (!email || !password) {
            notify.error('!Debe ingresar un correo y una contraseña!')
            return
        }

        try {
            const res = await request.post(url, data)
            const user = res.data.body.data.userData
            const token = res.data.body.token
            user.token = token
            setUser(user)
            const userString = JSON.stringify(user)
            localStorage.setItem('user', userString)
            setLoading(false)
            notify.success("Inicio de sesion exitoso")
            navigate('/dashboard/users')

        } catch (error) {
            setLoading(false)
            const message = (error.response?.data.message || error.message)
            notify.error(message)
        }
    }

    return {
        login,
        eye,
        setEye
    }
}
export default useLogin

