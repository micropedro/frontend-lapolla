/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useUserStore from "../store/userStore"
import useNotify from "./useNotify"
import useErrorManager from "./useErrorManager"
import { verify, notFalsy } from "../services/verify"
const useCargarAnimales = () => {
    const errorManager = useErrorManager()
    const { user } = useUserStore()
    const { notify } = useNotify()
    const [animalSelected, setAnimalSelected] = useState()
    const [radioRoulet, setRadioRoulet] = useState(null)

    const [hora, setHora] = useState(8)
    const [inputDate, setInputDate] = useState(null)

    const currentDate = new Date()
    const formattedDate = currentDate.toISOString().split('T')[0]

    const handle = (animal) => setAnimalSelected(animal)

    const handleHora = (hora) => setHora(hora)

    const handleFecha = (fecha) => setInputDate(fecha)

    useEffect(() => {
        const date = new Date()
        const animalHour = date.getHours()
        handleHora(animalHour)
        const fecha = date.getFullYear() + '-' + (String(date.getMonth() + 1).padStart(2, '0')) + '-' + (String(date.getDate()).padStart(2, '0'))
        handleFecha(fecha)
    }, [])

    const save = async (animal) => {

        const data = {
            owner: user._id,
            animalId: animal.id,
            name: animal.name,
            hora: hora,
            fecha: inputDate + ' ' + hora + ':00:00',
            roulet: radioRoulet
        }

        if (!verify([
            notFalsy(data.owner),
            notFalsy(data.name),
            notFalsy(data.roulet)
        ])) { return notify.error('A ocurrido un error al intentar guardar el animalito') }

        try {
            await request.post(urlApi + '/animals', data)
            notify.success("Cargado con exito")

        } catch (error) { errorManager(error) }

    }


    return {
        animalSelected, setAnimalSelected,
        handle,
        save,
        hora, setHora,
        formattedDate,
        radioRoulet, setRadioRoulet,
        handleHora,
        handleFecha
    }
}

export default useCargarAnimales