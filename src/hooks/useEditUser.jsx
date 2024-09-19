import urlApi from "../services/urlApi"
import useLoadingStore from "../store/loadingStore"
import useNotify from "./useNotify"
import useUsers from "./useUsers"
import request from "../services/request"
import useErrorManager from "./useErrorManager"
import useEditUserStore from "../store/editUserStore"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import useUser from './useUser'
import { inputStep } from '../config.json'
import useUserStore from "../store/userStore"
import { validate } from '../services/validate'

const useEditUser = () => {

    const { user } = useUserStore()

    const { getUser } = useUser()
    const { editUser, setEditUser } = useEditUserStore()
    const errorManager = useErrorManager()
    const { getUsers } = useUsers()
    const { notify } = useNotify()
    const { setLoading } = useLoadingStore()

    const { id } = useParams()

    const fetchUserById = async () => {
        const user = await getUser(id)
        setEditUser(user)
    }

    useEffect(() => {
        if (Object.keys(editUser).length === 0) fetchUserById(id)
    }, [editUser])

    const handleUserType = (e) => {
        setEditUser({ ...editUser, level: e.target.value })
    }

    const sendUserForm = async (e) => {

        try {
            e.preventDefault()
            setLoading(true)

            const user = {
                name: e?.target?.name?.value,
                email: e?.target?.email?.value,
                ci: e?.target?.ci?.value,
                phone: e?.target?.phone?.value,
                level: e?.target?.level?.value,
                _id: e?.target?._id?.value,
                admin: e?.target?.admin?.value,
                grupero: e?.target?.grupero?.value,
                percent: e?.target?.percent?.value
            }

            validate.required([user.name, user.email, user.ci, user.phone, user.level, user._id, user.percent])

            if (user.level > 5 || user.level < 1) throw ("Elija un tipo de usuario")
            const response = await request.post(urlApi + "/admin/updateuser", user)
            if (response) {
                getUsers()
                notify.success("Se guardaron todos los cambios")
            } else {
                throw "Ocurrio un error"
            }
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }

    const [percentAdmin, setPercentAdmin] = useState(0)

    const handlePercent = (value) => {

        if (value === "+" && percentAdmin < user.percent) setPercentAdmin(percentAdmin + inputStep)

        if (value === "-" && percentAdmin > 0) setPercentAdmin(percentAdmin - inputStep)

    }

    useEffect(() => {
        if (editUser?.percent) setPercentAdmin(editUser.percent)
    }, [editUser])

    const userType = {
        1: "Master",
        2: "Administrador",
        3: "Grupero",
        4: "Agencia",
        5: "Cliente"
    }

    return {
        sendUserForm,
        editUser,
        handleUserType,
        handlePercent,
        userType,
        percentAdmin
    }
}

export default useEditUser