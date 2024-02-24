/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
const Guard = ({ children }) => {

    const navigate = useNavigate()

    const [access, setAccess] = useState(false)

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            setAccess(false)
            navigate('/login')
        } else {
            setAccess(true)
        }
    }, [])

    return access ? children : "Error de autenticacion de usuario..."

}

export default Guard