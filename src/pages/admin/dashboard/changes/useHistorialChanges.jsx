import { useEffect, useState } from "react"
import { getChangeTypes } from '../../../../controllers/methodController'
import useErrorManager from '../../../../hooks/useErrorManager'
const useHistorialChanges = () => {

    const errorManager = useErrorManager()
    const [changes, setChanges] = useState([])

    const getChangesTypes = async () => {
        try {
            const res = await getChangeTypes()
            const changes = res.data.body
            console.log(changes)
            setChanges(changes)
        } catch (error) {
            errorManager(error)
        }
    }

    useEffect(() => {
        getChangesTypes()
    }, [])
    return {
        changes
    }
}

export default useHistorialChanges