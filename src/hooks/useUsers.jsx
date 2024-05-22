/* eslint-disable react-hooks/exhaustive-deps */
import urlApi from "../services/urlApi"
import { useEffect } from "react"
import useUserStore from "../store/userStore"
import useModal from "../store/modalStore"
import useLoadingStore from "../store/loadingStore"
import request from "../services/request"
import useNotify from '../hooks/useNotify'
import useDeposits from "./useDeposits"

const useUsers = () => {

    const { findUserByCi } = useDeposits()
    const { notify } = useNotify()
    const { setLoading } = useLoadingStore()
    const { setVisible, setText, setUser } = useModal()
    const { users, setUsers } = useUserStore()

    const getUsers = async () => {
        setLoading(true)

        try {
            const users = await request.get(urlApi + '/users')
            /* console.log(users) */
            const usersList = users.data.body
            if (!usersList) throw 'Usuarios no encontrados'
            if (usersList.length > 0) setUsers(usersList)
            
        } catch (error) {
            const message = error
            notify.error(message)
        }

        setLoading(false)
    }

    const deleteModal = (user) => {
        setText('¿Esta seguro que desea eliminar este usuario?')
        setVisible(true)
        setUser(user)
    }

    const _findUserByCi = async (e) => {
        const user = await findUserByCi(e)
        if (user) setUsers([user])
        else notify.error('Usuario no encontrado')
    }

    useEffect(() => { getUsers() }, [])

    const getUserName = (userId) => {
    
        return users.length > 0 ? (users.filter(user => user._id === userId)[0]).name : ""
    }
    
    return {
        users,
        deleteModal,
        getUsers,
        _findUserByCi,
        findUserByCi,
        getUserName
    }
}

export default useUsers