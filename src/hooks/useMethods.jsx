/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useNotify from "./useNotify"
import useLoadingStore from "../store/loadingStore"
const useMethods = () => {
    const { setLoading } = useLoadingStore()
    const { notify } = useNotify()
    const [methodName, setMethodName] = useState()
    const [selected, setSelected] = useState([])
    const [actualMethods, setActualMethods] = useState([])

    const sendForm = async (e) => {
        e.preventDefault()
        setLoading(true)
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
            const response = await request.post(urlApi + '/admin/methods/addMethod', datos)
            if (response) notify.success(response.data.message)
            getActualMethods()
        } catch (error) {
            notify.error(error.message || error)
        } finally {
            setLoading(false)
        }
    }

    const itemType = (item) => item === 'correo' ? 'email' : 'text'

    const handleSelected = (e) => {
        if (e.target.checked) {
            //si selected incluye e.target.name no envia 
            if (!selected.includes(e.target.name)) setSelected([...selected, e.target.name])
        } else {
            setSelected(selected.filter((item) => item !== e.target.name))
        }

    }

    const getActualMethods = async () => {
        setLoading(true)
        const response = await request.get(urlApi + '/admin/methods/getMethods')
        if (response?.data.body) {
            setActualMethods(response.data.body)
        }
        setLoading(false)
    }

    const deleteMethod = async (_id) => {
        setLoading(true)
        const response = await request.post(urlApi + '/admin/methods/delete', { _id })
        if (response.data.status === 200) {
            getActualMethods()
            notify.success(response.data.message)
        } else {
            notify.error("Ocurrio un error en la peticion")
        }
        setLoading(false)
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