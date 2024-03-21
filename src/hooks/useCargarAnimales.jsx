import { useState } from "react"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useUserStore from "../store/userStore"
import useNotify from "./useNotify"
import useErrorManager from "./useErrorManager"
const useCargarAnimales = () => {
    const errorManager = useErrorManager()
    const { user } = useUserStore()
    const { notify } = useNotify()
    const [animalSelected, setAnimalSelected] = useState()
    const handle = (animal) => setAnimalSelected(animal)

    const save = async (animal) => {
        const data = {
            "owner": user._id,
            "animalId": animal.id,
            "name": animal.name
        }
        try {
            await request.post(urlApi + '/animals', data)
            notify.success("Cargado con exito")

        } catch (error) { errorManager(error) }

    }

    return {
        animalSelected,
        setAnimalSelected,
        handle,
        save
    }
}

export default useCargarAnimales