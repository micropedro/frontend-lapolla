/* import useAnimalsStore from "../store/animalsStore" */
import { useState } from "react"
const useVentas = () => {
    const [animals, selectAnimal] = useState([])
    return {
        selectAnimal,
        animals
    }
}

export default useVentas