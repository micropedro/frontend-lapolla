/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
const Guard = () => {
    const navigate = useNavigate()
    useEffect(() => { if (!localStorage.getItem('user')) { navigate('/login') } }, [])
}

export default Guard