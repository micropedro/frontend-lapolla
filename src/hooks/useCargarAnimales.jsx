/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useAnimals from "../hooks/useAnimals"
import useUserStore from "../store/userStore"
import useNotify from "./useNotify"
import useErrorManager from "./useErrorManager"
import { verify, notFalsy } from "../services/verify"
import formatDate from '../services/formatDate'

const useCargarAnimales = () => {
    const errorManager = useErrorManager()
    const { user } = useUserStore()
    const { notify } = useNotify()
    const [animalSelected, setAnimalSelected] = useState()
    const [radioRoulet, setRadioRoulet] = useState(null)
    const { animals, setAnimals, getAnimals } = useAnimals()

    const [hora, setHora] = useState(8)
    const [inputDate, setInputDate] = useState(null)

    const currentDate = new Date()
    const formattedDate = currentDate.toISOString().split('T')[0]

    const handle = (animal) => setAnimalSelected(animal)

    const handleHora = (hora) => {
        return setHora(Number(hora))
    }
  
    const handleFecha = (fecha) => setInputDate(fecha)

    const isAnimalLoaded = () => {
        const animalsRoulette = animals.filter( a => {
            const dateLoaded = formatDate(a.fecha).split('/').reverse().join('-')
            return a.roulet === radioRoulet && a.hora === hora && dateLoaded === inputDate
        })
        if(animalsRoulette.length > 0) return true
        return false
    }

    const loadAnimals = async() => {
        const _animals = await getAnimals()
        setAnimals(_animals)
    }

    useEffect(() => {
        const date = new Date()
        const animalHour = date.getHours()
        handleHora(animalHour)
        const fecha = date.getFullYear() + '-' + (String(date.getMonth() + 1).padStart(2, '0')) + '-' + (String(date.getDate()).padStart(2, '0'))
        handleFecha(fecha)
        loadAnimals()
    }, [])

    const save = async (animal) => {

        try {

            if(isAnimalLoaded()){
                notify.error('Esta hora ya ha sido cargada')
                return
            }
         
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
            
            await request.post(urlApi + '/animals', data)
            console.log('cargado')
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