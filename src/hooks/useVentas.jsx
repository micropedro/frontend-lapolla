/* eslint-disable react-hooks/exhaustive-deps */
import useNotify from "./useNotify"
import useTicketStore from "../store/ticketStore"
import { useState, useEffect } from "react"
import loadingStore from "../store/loadingStore"
import urlApi from "../services/urlApi"
import request from "../services/request"
import useErrorManager from "./useErrorManager"

const useVentas = () => {
    const errorManager = useErrorManager()
    const [menu, setMenu] = useState("taquilla")
    const { animals, setAnimals, setVisible, type, setType, setTicketCode,setTicketNumber } = useTicketStore()
    const { loading, setLoading } = loadingStore()
    const { notify } = useNotify()

    useEffect(() => () => setAnimals([]), [])

    const getTicketCode = async () => {
        try {
            const code = await request.get(`${urlApi}/secrettoken`)
            setTicketCode(code.data.body.ticketCode)
            setTicketNumber(code.data.body.ticketNumber)
            setVisible(true)
            setLoading(false)
        } catch (error) {
            errorManager(error)
        }
    }

    const handleSelectedAnimal = (animal) => {

        if (animals.includes(animal)) return setAnimals(animals.filter((i) => i.id !== animal.id))

        if (!type) return notify.error('Debe elejir un tipo de quiniela')

        if (type === 1) {
            if (animals.length > 5) {
                notify.error("Gran Quiniela, Solo puede seleccionar 6 animales")
                return
            }
            setAnimals([...animals, animal])
        } else if (type === 2) {
            if (animals.length > 3) {
                notify.error("Mini Quiniela, Solo puede seleccionar 4 animales")
                return
            }
            setAnimals([...animals, animal])
        }
    }

    const saveAndPrint = () => {
        if (!type) return notify.error('debe elegir un tipo de quiniela')
        if (type === 1 && animals.length < 6) return notify.error('debe elegir 6 animalitos')
        if (type === 2 && animals.length < 4) return notify.error('debe elegir 4 animalitos')
        setVisible(true)
    }

    const saveTicketClient = () => {
        if (!type) return notify.error('debe elegir un tipo de quiniela')
        if (type === 1 && animals.length < 6) return notify.error('debe elegir 6 animalitos')
        if (type === 2 && animals.length < 4) return notify.error('debe elegir 4 animalitos')
        setLoading(true)
        getTicketCode()
    }

    return {
        setAnimals,
        animals,
        loading,
        handleSelectedAnimal,
        saveAndPrint,
        saveTicketClient,
        getTicketCode,
        type,
        setType,
        menu, setMenu
    }

}

export default useVentas