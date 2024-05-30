import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import permissions from '../services/permissions'
const Guard = ({ children }) => {

    const navigate = useNavigate()

    const [access, setAccess] = useState(false)

    useEffect(() => {
        const user = permissions.getUser()
        if (user && permissions.guard.includes(user.level)) {
            setAccess(true)
        } else {
            localStorage.removeItem('user')
            setAccess(false)
            navigate('/login')
        }

    }, [access])

    return access ? children : 'Error de autenticacion de usuario...'

}

export default Guard