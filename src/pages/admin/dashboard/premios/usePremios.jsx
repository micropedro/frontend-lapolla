import usePremiosStore from "./premiosStore"
import request from "../../../../services/request"
import urlApi from "../../../../services/urlApi"
import useLoadingStore from "../../../../store/loadingModalStore"
import useErrorManager from "../../../../hooks/useErrorManager" // eslint-disable-line
import { useEffect } from "react"

const usePremios = () => {

    const { modalDatos, setModalDatos, setPremios, premios, typeModal, setTypeModal, setPremioSelected } = usePremiosStore()
    const { setLoading } = useLoadingStore()
    const errorManager = useErrorManager()

    const getData = async () => {
        try {
            setLoading(true)
            const res = await request.get(urlApi + '/premios')
            setPremios(res.data.body)
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return {
        modalDatos,
        setModalDatos,
        premios,
        typeModal,
        setTypeModal,
        setPremioSelected
    }
}

export default usePremios