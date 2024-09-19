import { useEffect, useState } from "react"
import { getPercentTree } from "./percentTreeService"
import { useParams } from "react-router-dom"
import useLoadingStore  from '../../../../store/loadingStore'

const usePercentTree = () => {

    const { setLoading } = useLoadingStore()

    const { id } = useParams()

    const [tree, setTree] = useState("")

    const getTree = async () => {
        setLoading(true)
        const getingTree = await getPercentTree(id)
        setTree(getingTree)
        setLoading(false)
    }

    useEffect(() => {
        getTree()
    }, [])

    return {
        tree,
        id
    }
}

export default usePercentTree