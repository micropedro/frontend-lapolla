import useNotify from "./useNotify"
import useTicketStore from "../store/ticketStore"
const useVentas = () => {
    const { animals, setAnimals, setVisible, type, setType } = useTicketStore()
    const { notify } = useNotify()
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
            if (animals.length > 2) {
                notify.error("Mini Quiniela, Solo puede seleccionar 3 animales")
                return
            }
            setAnimals([...animals, animal])
        }
    }

    const saveAndPrint = () => {
        if (!type) return notify.error('debe elegir un tipo de quiniela')
        if (type === 1 && animals.length < 6) return notify.error('debe elegir 6 animalitos')
        if (type === 2 && animals.length < 2) return notify.error('debe elegir 3 animalitos')
        setVisible(true)
    }

    return {
        setAnimals,
        animals,
        handleSelectedAnimal,
        saveAndPrint,
        type,
        setType
    }

}

export default useVentas