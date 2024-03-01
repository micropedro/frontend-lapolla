import { useEffect, useState } from "react"
import request from "../services/request"
import apiUrl from "../services/apiUrl"
import useNotify from "./useNotify"

const useMethods = () => {
    const { notify } = useNotify()
    const [methodName, setMethodName] = useState()
    const [selected, setSelected] = useState([])
    const [actualMethods, setActualMethods] = useState([])
    const sendForm = async (e) => {
        e.preventDefault()
        if (!methodName) {
            notify.warn("Debe porporcionar un nombre para el metodo de pago")
            return
        }
        const correo = e.target.correo?.value || ""
        const cuenta = e.target.cuenta?.value || ""
        const tipo = e.target.tipo?.value || ""
        const cedula = e.target.cedula?.value || ""
        const banco = e.target.banco?.value || ""
        const nombre = e.target.nombre?.value || ""
        const telefono = e.target.telefono?.value || ""
        const datos = {
            correo,
            cuenta,
            tipo,
            cedula,
            banco,
            nombre,
            methodName,
            telefono
        }
        try {
            const response = await request.post(apiUrl + '/admin/methods/addMethod', datos)
            if (response) notify.success(response.data.message)
            console.log(response)
            setMethodName("")
            getActualMethods()
        } catch (error) {
            notify.error(error.message || error)
        }
    }

    const itemType = (item) => item === 'correo' ? 'email' : 'text'

    const handleSelected = (e) => e.target.checked ? setSelected([...selected, e.target.name]) : setSelected(selected.filter((item) => item !== e.target.name))

    const getActualMethods = async () => {
        const response = await request.get(apiUrl + '/admin/methods/getMethods')
        if (response?.data.body) {
            setActualMethods(response.data.body)
        }
    }

    const deleteMethod = async (_id) => {
        const response = await request.post(apiUrl + '/admin/methods/delete', { _id })
        console.log(response)
        if (response.data.status === 200) {
            getActualMethods()
            notify.success(response.data.message)
        } else {
            notify.error("Ocurrio un error en la peticion")
        }
    }

    useEffect(() => {
        getActualMethods()
    }, [])
    return {
        handleSelected, sendForm,
        itemType, methodName, setMethodName, selected, actualMethods,
        deleteMethod
    }
}
export default useMethods