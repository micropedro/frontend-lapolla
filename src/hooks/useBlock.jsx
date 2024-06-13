import { useState } from "react"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useEditUserStore from "../store/editUserStore"
import useNotify from "./useNotify"
import useErrorManager from "./useErrorManager"

// POST -> blockUser

const useBlock = () => {
    const errorManager = useErrorManager()
    const [ block, setBlock ] = useState(false)
    const [ load, setLoad] = useState(false)
    const { editUser } = useEditUserStore()
    const { notify } = useNotify()

    const handleBlock = async () => {
        setLoad(true)
        setBlock(!block)
        try {
            await request.post(urlApi + "/blockUser", {
                _id: editUser._id
            })
            notify.success("Usuario Bloqueda correctamente")
        } catch (error) {
            errorManager(error)
        }finally{
            setLoad(false)
        }
    }

    return {
        block,
        setBlock,
        handleBlock,
        load
    }
}

export default useBlock