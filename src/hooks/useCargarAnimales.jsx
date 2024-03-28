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
    const [hora, setHora] = useState(9)
    const [radioRoulet, setRadioRoulet] = useState(null)
    const [_date, setDate] = useState(null)
    const currentDate = new Date()
    const formattedDate = currentDate.toISOString().split('T')[0]

    const handle = (animal) => setAnimalSelected(animal)

    useEffect(() => {
        const date = new Date()
        const defaultTime = date.getHours()
        setHora(defaultTime)
    }, [])

    const animalDate = (e) => {
        const x = new Date(e.target.value)
        setDate(x)
    }

    const save = async (animal) => {
        const newDate = new Date()
        const asas = newDate.toISOString()
        const data = {
            owner: user._id,
            animalId: animal.id,
            name: animal.name,
            date: _date || asas,
            hora: hora,
            roulet: radioRoulet
        }

        console.log(data)

        if (!verify([
            notFalsy(data.owner),
            notFalsy(data.name),
            notFalsy(data.roulet)
        ])) {
            notify.error('A ocurrido un error al intentar guardar el animalito')
            return
        }


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
        animalDate
    }
}

export default useCargarAnimales