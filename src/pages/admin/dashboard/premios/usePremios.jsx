import usePremiosStore from "./premiosStore"
import request from "../../../../services/request"
import urlApi from "../../../../services/urlApi"
import useLoadingStore from "../../../../store/loadingStore"
import useErrorManager from "../../../../hooks/useErrorManager" // eslint-disable-line
import { useEffect, useState } from "react"

const usePremios = () => {
    const [input, setInput] = useState("")
    const { modalDatos, setModalDatos, setPremios, premios, typeModal, setTypeModal, setPremioSelected, navegador, setNavegador } = usePremiosStore()
    const { setLoading,loading } = useLoadingStore()
    const errorManager = useErrorManager()

    const handleModal = (typeModal, premio) => {
        setPremioSelected(premio)
        setTypeModal(typeModal)
        setModalDatos(true)
    }

    const getData = async (status) => {
        try {
            setLoading(true)
            const res = await request.get(urlApi + '/premios')
            if (res) {
                const premios = res.data.body
                const filteredPremios = premios.filter(premio => premio.status === status)
                setPremios(filteredPremios)
            }
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    const handleFilterPremios = async (tipo, status) => {
        setLoading(true)
        await getData(status)
        setNavegador(tipo)
        setLoading(false)
    }

    const handleSubmit = async (e, _id) => {
        e.preventDefault()
        try {
            setLoading(true)
            const ref = e.target.ref.value
            await request.put(urlApi + '/premios/ref', { ref, _id })
            await getData(false)
            closeModal()
            setLoading(false)
        } catch (error) {
            errorManager(error)
        }

    }
    const closeModal = () => {
        setModalDatos(false)
        setInput("")
    }

    useEffect(() => {
        getData(false)
    }, [])

    return {
        modalDatos,
        setModalDatos,
        premios,
        typeModal,
        setTypeModal,
        setPremioSelected,
        handleModal,
        navegador,
        handleFilterPremios,
        handleSubmit,
        closeModal,
        input, setInput,
        loading
    }
}

export default usePremios