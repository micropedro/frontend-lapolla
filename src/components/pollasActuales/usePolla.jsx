import { useEffect } from "react"
import usePollasStore from "./usePollaStore"
import urlApi from '../../services/urlApi'
import request from "../../services/request"
import useErrorManager from "../../hooks/useErrorManager"
import {validate} from "../../services/validate"

const usePolla = () => {
    const errorMaganer = useErrorManager()
    const { pollas, setPollas } = usePollasStore()

    const getPollas = async () => {
        try {
            const pollas = await request.get(urlApi + "/pollas")
            const result = pollas.data.body
            validate.number([result.mini, result.gran])
            validate.required([result.mini >= 0, result.gran >= 0], "Error en validacion de los resultados")
            setPollas(result)
        } catch (error) {
            errorMaganer(error)
        }
    }

    useEffect(() => {
        getPollas()
    }, [])

    return {
        pollas
    }
}

export default usePolla