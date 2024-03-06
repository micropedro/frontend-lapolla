import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
/* eslint-disable react/prop-types */
const Print = () => {
    const navigate = useNavigate()
    useEffect(() => {

        window.print()
        navigate('/dashboard/ventas')
    }, [])
    return (<div className="bg-dark text-light p-4 print">
        hola mundo print
    </div>)
}
export default Print