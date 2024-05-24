/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import useConfigStore from "../store/configStore"
import urlApi from "../services/urlApi"
import request from "../services/request"
import useErrorManager from "../hooks/useErrorManager"
import useLoadingStore from "../store/loadingStore"
import useNotify from "./useNotify"
const useConfig = () => {
    const { notify } = useNotify()
    const { setLoading } = useLoadingStore()
    const errorManager = useErrorManager()
    const { config, setConfig } = useConfigStore()

    const getConfig = async () => {
        setLoading(true)
        try {
            const _config = await request.get(urlApi + "/config")
            setConfig(_config.data.body)
        } catch (error) {
            errorManager(error)
        }
        setLoading(false)
    }

    useEffect(() => { getConfig() }, [])

    const updateConfig = async () => {
        setLoading(true)

        try {
            const body = {
                premioCasa: config.premioCasa,
                precioGranQuiniela: config.precioGranQuiniela,
                precioMiniQuiniela: config.precioMiniQuiniela,
                horaGranQuiniela: config.horaGranQuiniela,
                horasMiniQuiniela: config.horasMiniQuiniela,
            }

            const res = await request.post(urlApi + "/config/update", body)
            if (!res) throw 'No se pudo actualizar la configuracion'
            getConfig()
            notify.success("Guardado con exito")
        } catch (error) {
            errorManager(error)
        }

        setLoading(false)
    }

    const handleHoras = (e) => {
        const permitidos = "0123456789,"
        let setter = ""
        e.target.value.split("").forEach(element => {
            if (permitidos.split("").includes(element)) setter += element
        })
        const horasMiniQuiniela = setter.split(",")
        setConfig({ ...config, horasMiniQuiniela })
    }

    return {
        setConfig,
        config,
        updateConfig,
        handleHoras
    }
}

export default useConfig