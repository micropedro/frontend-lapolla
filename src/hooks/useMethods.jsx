/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useNotify from "./useNotify"
import useLoadingStore from "../store/loadingStore"
import userStore from "../store/userStore"
import useErrorManager from "../hooks/useErrorManager"
import { updateMethodChangeType } from "../controllers/methodController"

const useMethods = () => {
    const errorManager = useErrorManager()
    const { user } = userStore()
    const { setLoading } = useLoadingStore()
    const { notify } = useNotify()
    const [methodName, setMethodName] = useState("")
    const [selected, setSelected] = useState([])
    const [selectedSecondary, setSelectedSecondary] = useState(null)
    const [textSecondary, setTextSecondary] = useState(null)
    const [actualMethods, setActualMethods] = useState([])
    const [defaultMethod, setDefaultMethod] = useState({ _id: undefined })
    const [imageUrl, setImageUrl] = useState("")
    const [tipoDeCambio, setTipoDeCambio] = useState(1)
    const [change, setChange] = useState({})

    const resetVariables = () => {
        setMethodName("")
        setSelected([])
        setSelectedSecondary(null)
        setDefaultMethod({ _id: undefined })
        setImageUrl("")
    }

    const validateImage = (image) => {
        const urlPattern = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/.*)?$/i
        return !!urlPattern.test(image)
    }

    const sendForm = async (e) => {
        try {
            e.preventDefault()
            if (!methodName) throw "Debe porporcionar un nombre para el metodo de pago"

            if (!imageUrl) throw "Debe porporcionar una imagen"

            if (!validateImage(imageUrl)) throw "Debe porporcionar una imagen valida"

            setLoading(true)
            const correo = e.target.correo?.value || ""
            const cuenta = e.target.cuenta?.value || ""
            const tipo = e.target.tipo?.value || ""
            const cedula = e.target.cedula?.value || ""
            const banco = e.target.banco?.value || ""
            const nombre = e.target.nombre?.value || ""
            const telefono = e.target.telefono?.value || ""
            const secondary = e.target.secondary?.value || ""
            const adminMethodId = e?.target?.adminMethodId?.value || '000000000000000000000000'

            const datosPreProccess = {
                correo,
                cuenta,
                tipo,
                cedula,
                banco,
                nombre,
                telefono
            }

            const datos = {
                correo,
                cuenta,
                tipo,
                cedula,
                banco,
                nombre,
                methodName,
                telefono,
                imageUrl,
                userId: user._id,
                secondary: datosPreProccess[selectedSecondary] || secondary,
                tipoDeCambio,
                adminMethodId
            }


            const response = await request.post(urlApi + '/admin/methods/addMethod', datos)
            if (response) notify.success(response.data.message)
            await getActualMethods()
            resetVariables()
        } catch (error) {
            errorManager(error)
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
            if (selectedSecondary === e.target.name) setSelectedSecondary(null)
        }
    }

    const handleSelectedSecondary = (dato) => setSelectedSecondary(dato || "")

    const handleInputs = (e) => {
        if (e.target.name === selectedSecondary) setTextSecondary(e.target.value)
    }

    const getActualMethods = async () => {
        /*  setLoading(true) */
        const response = await request.get(urlApi + '/admin/methods/getMethods/' + user._id)
        const meth = response?.data?.body
        if (meth) {
            setDefaultMethod(meth[0])
            setActualMethods(response.data.body)
            return response.data.body
        }
        setLoading(false)
    }

    const deleteMethod = async (_id) => {
        console.log(_id)
        setLoading(true)
        try {
            const response = await request.delete(urlApi + '/admin/methods/delete/' + _id)
            console.log(response)
            if (!response) throw 'Error deleting method'
            await getActualMethods()
            resetVariables()
            notify.success(response.data.message)
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    const handleEditChangeType = ({ _id, tipoDeCambio }) => {
        setChange({ _id, tipoDeCambio })
    }

    const saveChangeType = async () => {
        try {
            const res = await updateMethodChangeType(change)
            if (res.data.body) notify.success(res.data.message)
            await getActualMethods()

        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }

    }

    useEffect(() => {
        getActualMethods()
    }, [])

    return {
        handleSelected, sendForm,
        itemType, methodName, setMethodName, selected, actualMethods,
        deleteMethod,
        defaultMethod, setDefaultMethod,
        imageUrl, setImageUrl,
        selectedSecondary, handleSelectedSecondary,
        handleInputs, textSecondary,
        tipoDeCambio, setTipoDeCambio,
        handleEditChangeType, saveChangeType, change
    }
}
export default useMethods