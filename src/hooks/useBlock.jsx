import { useState } from "react"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useEditUserStore from "../store/editUserStore"
import useNotify from "./useNotify"
import useErrorManager from "./useErrorManager"

// POST -> blockUser

const useBlock = () => {
    const errorManager = useErrorManager()
    const [ load, setLoad] = useState(false)
    const { editUser, setEditUser } = useEditUserStore()
    const { notify } = useNotify()

    const handleBlock = async () => {
        setLoad(true)
       
        try {
            const response = await request.post(urlApi + "/blockUser", {
                _id: editUser._id
            })
            setEditUser({ ...editUser, block: !editUser.block })
            notify.success(response.data.message)
        } catch (error) {
            errorManager(error)
        }finally{
            setLoad(false)
        }
    }

    return {
        handleBlock,
        load
    }
}

export default useBlock