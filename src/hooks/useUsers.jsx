/* eslint-disable react-hooks/exhaustive-deps */
import urlApi from "../services/urlApi"
import { useEffect, useState } from "react"
import useUserStore from "../store/userStore"
import useModal from "../store/modalStore"
import useLoadingStore from "../store/loadingStore"
import request from "../services/request"
import useDeposits from "./useDeposits"
import useErrorManager from "./useErrorManager"

const useUsers = () => {

    const errorManager = useErrorManager()
    const { findUserByCi } = useDeposits()
    const { setLoading } = useLoadingStore()
    const { setVisible, setText, setUser } = useModal()
    const { users, setUsers } = useUserStore()

    const [sortSaldo, setSortSaldo] = useState(true)
    const [filterduser, setFilterduser] = useState([])
    const [fiteredBtn,setFiteredBtn] = useState(0)

    const getUsers = async () => {
        setLoading(true)
        try {
            const users = await request.get(urlApi + '/users')
            /* console.log(users) */
            const usersList = users.data.body
            if (!usersList) throw 'Usuarios no encontrados'
            if (usersList.length > 0) {
                setFilterduser(usersList)
                setUsers(usersList)
            }
            return usersList
        } catch (error) {
            errorManager(error)
        } finally {
            setLoading(false)
        }
    }



    const deleteModal = (user) => {
        setText(<div>
            ¿Seguro de Bloquear a este usuario?
            <div className="text-center" > <b> {user.name} </b> </div>
        </div>)
        setVisible(true)
        console.log(user)
        setUser(user)
    }

    const _findUserByCi = async (cedula) => {
        const user = await findUserByCi(cedula)
        if (user) setFilterduser([user])
    }

    const filterUsersFinded = (text) => {
        const _users = users?.filter(user => user.name.includes(text))
        setFilterduser(_users)
    }

    const handleSortSaldo = () => {
        setSortSaldo(!sortSaldo)
        if (sortSaldo) {
            const fil = filterduser?.sort((a, b) => a.balance - b.balance)
            setFilterduser(fil)
        } else {
            const fil2 = filterduser?.sort((a, b) => b.balance - a.balance)
            setFilterduser(fil2)
        }
        /* const text = "sd"
        const _users = users?.filter(user => user.name.includes(text))
        setFilterduser(_users) */
    }

    const getUserName = (userId) => users.length > 0 ? (users.filter(user => user?._id === userId)[0]).name : ""

    const filterUser = async (level) => {
        const users = await getUsers()
        console.log(users)
        const filteredUsers = users.filter(user => user.level === level)
        setFilterduser(filteredUsers)
        setLoading(false)
    }

    useEffect(() => { getUsers() }, [])
    return {
        users,
        deleteModal,
        getUsers,
        _findUserByCi,
        findUserByCi,
        getUserName,
        filterUser,
        filterUsersFinded,
        filterduser,
        setFilterduser,
        sortSaldo, setSortSaldo,
        handleSortSaldo,
        fiteredBtn,setFiteredBtn
    }
}

export default useUsers