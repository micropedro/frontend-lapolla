import useNotify from "./useNotify"
import useTicketStore from "../store/ticketStore"
const useVentas = () => {
    const { animals, setAnimals, setVisible } = useTicketStore()
    const { notify } = useNotify()
    const handleSelectedAnimal = (animal) => {

        if (animals.includes(animal)) setAnimals(animals.filter((i) => i.id !== animal.id))

        if (!animals.includes(animal)) {

            if (animals.length === 6) {
                notify.error("Solo puede seleccionar 6 animales")
                return
            }
            setAnimals([...animals, animal])
        }
    }

    const saveAndPrint = () => {
        if (animals.length < 6) return notify.error('debe elegir 6 animalitos')
        setVisible(true)
    }

    return {
        setAnimals,
        animals,
        handleSelectedAnimal,
        saveAndPrint
    }

}

export default useVentas