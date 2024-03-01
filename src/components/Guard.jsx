/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
const Guard = ({ children }) => {

    const navigate = useNavigate()

    const [access, setAccess] = useState(false,() => { console.log("876876876876") })

    useEffect(() => {
        //falta agregar los tipos de usuarios que va a entrar 1 2 3 4
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