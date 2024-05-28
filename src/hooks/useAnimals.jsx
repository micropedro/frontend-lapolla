/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"
import useAnimalsStore from "../store/animalsStore"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useErrorManager from "./useErrorManager"
import useLoadingStore from "../store/loadingStore"

const useAnimal = () => {
    const { setLoading } = useLoadingStore()
    const errorManager = useErrorManager()
    const { setAnimals, animals } = useAnimalsStore()

    /*  function contarCoincidencias(array1, array2) {
         const intersection = array1.filter(element => array2.includes(element));
         return intersection.length;
     } */

    const getAnimals = async () => {
        try {
            const res = await request.get(`${urlApi}/animals`)
            const resultAnimals = res.data.body
            const filtered = resultAnimals.filter((animal) => {
                const registerDate = new Date(animal.date)
                const date = new Date()
                const hora = date.getHours()
                const hoy = (`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`)
                const regDay = (`${registerDate.getDate()}-${registerDate.getMonth()}-${registerDate.getFullYear()}`)
                const ayer = new Date(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)
                const ayerDate = (ayer.getDate() - 1)

                if (hora > 8) {
                    return hoy === regDay
                } else {
                    return hoy === regDay || registerDate.getDate() === ayerDate && registerDate.getHours() > 8
                }
            })
            setAnimals(filtered)
            return filtered
        } catch (error) { errorManager(error) }
    }

    const deleteAnimal = async (animalId,closeModal) => {
        try {
            setLoading(true)
            const result = await request.delete(urlApi + '/animals/' + animalId)
            console.log(result.data)
            
            await getAnimals()
            closeModal()
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => { getAnimals() }, [])

    return {
        animals,
        setAnimals,
        getAnimals,
        deleteAnimal
    }
}

export default useAnimal