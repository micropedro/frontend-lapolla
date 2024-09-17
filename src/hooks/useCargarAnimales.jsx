/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useAnimals from "../hooks/useAnimals"
import useUserStore from "../store/userStore"
import useNotify from "./useNotify"
import useErrorManager from "./useErrorManager"
/* import formatDate from '../services/formatDate' */
import dateNow from "../services/dateNow"

const useCargarAnimales = () => {
    const errorManager = useErrorManager()
    const { user } = useUserStore()
    const { notify } = useNotify()
    const [animalSelected, setAnimalSelected] = useState()
    const [animalSelected2, setAnimalSelected2] = useState()
    const [animalSelected3, setAnimalSelected3] = useState()
    const [radioRoulet, setRadioRoulet] = useState(1)
    const { setAnimals, getAnimals } = useAnimals()
    const { animals } = useAnimals()

    const [hora, setHora] = useState(10)
    const [inputDate, setInputDate] = useState(null)

    const formattedDate = dateNow.anio + '-' + dateNow.mes + '-' + dateNow.dia

    const handle = (animal) => {
        if (radioRoulet === 1) {
            setAnimalSelected(animal)
        }
        if (radioRoulet === 2) setAnimalSelected2(animal)
        if (radioRoulet === 3) setAnimalSelected3(animal)

    }

    const handleHora = (hora) => {
        return setHora(Number(hora))
    }

    const handleFecha = (fecha) => setInputDate(fecha)

    const loadAnimals = async () => {
        const _animals = await getAnimals()
        setAnimals(_animals)
    }

    useEffect(() => {
        const date = new Date()
        const animalHour = date.getHours()
        if (animalHour < 8) handleHora(8)
        if (animalHour >= 8 && animalHour <= 21) handleHora(animalHour)
        if (animalHour > 21) handleHora(21)

        const fecha = date.getFullYear() + '-' + (String(date.getMonth() + 1).padStart(2, '0')) + '-' + (String(date.getDate()).padStart(2, '0'))
        handleFecha(fecha)
        loadAnimals()
    }, [])

    const isAnimalLoaded = (animalHora) => {
        console.log(animalSelected, animalHora, animals)
        const res = animals.filter(animal => animal.hora === animalHora)
        return res.length > 0

    }

    const save = async () => {

        try {

            const data = {
                owner: user._id,
                animalRuletaActiva: animalSelected,
                animalGranjita: animalSelected2,
                animalLotoActivo: animalSelected3,
                hora: hora,
                fecha: inputDate + ' ' + hora + ':00:00'
            }

            if (isAnimalLoaded(data.hora)) throw 'Esta hora ya ha sido cargada'

            const result = await request.post(urlApi + '/animals', data)
            if (result.data.message === 'success') notify.success("Cargado con exito")

        } catch (error) {
            errorManager(error)
        } finally {
            await getAnimals()
        }

    }


    return {
        animalSelected, setAnimalSelected,
        animalSelected2, setAnimalSelected2,
        animalSelected3, setAnimalSelected3,
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