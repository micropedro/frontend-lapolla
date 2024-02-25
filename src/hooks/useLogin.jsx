import useNotificationStore from '../store/notificationStore'
import axios from "axios"
import apiUrl from '../services/apiUrl'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import useUserStore from '../store/userStore'
import { useState } from 'react'
import useLoadingStore from '../store/loadingStore'
const useLogin = () => {
    const { setLoading } = useLoadingStore()
    const navigate = useNavigate()
    const { setUser } = useUserStore()
    const { setNotification, setText } = useNotificationStore()
    const [eye, setEye] = useState(false)

    const login = async (e) => {
        e.preventDefault()
        setLoading(true)
        const email = e.target.email.value
        const password = e.target.password.value
        const data = { email, password }
        const url = apiUrl + '/login'

        if (!email || !password) {
            setText("!Debe ingresar un correo y una contraseña!")
            setNotification(true)
            return
        }

        try {
            const res = await axios.post(url, data)
            const token = res.data.body

            const { userData } = jwtDecode(token)
            const user = userData
            user.token = token
            setUser(user)
            const userString = JSON.stringify(user)
            localStorage.setItem('user', userString)
            setLoading(false)
            navigate('/dashboard/users')
            
        } catch (error) {
            setLoading(false)
            console.log(error)
            setText('A ocurrido un error')
            setNotification(true)
        }
    }

    return {
        login,
        eye,
        setEye
    }
}
export default useLogin