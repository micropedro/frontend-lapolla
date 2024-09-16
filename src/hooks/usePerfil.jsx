import { useEffect } from 'react'
import request from '../services/request'
import urlApi from '../services/urlApi'
import userStore from "../store/userStore"
import useMethods from './useMethods'
import usePerfilStore from '../store/perfilStore'

const usePerfil = () => {

    const { modalAddMethod, setModalAddMethod, show, setShow, idMethod, setIdMethod,
        userMethods, setUserMethods, adminMethods, setAdminMethods, idMethSelected, setIdMethSelected } = usePerfilStore()

    const { deleteMethod } = useMethods()
    const { user, setUser } = userStore()

    const getUser = async () => {
        const localUser = JSON.parse(localStorage.getItem('user'))
        const res = await request.get(urlApi + '/user/' + localUser._id)

        if (res) {
            const { adminMethods, userMethods } = res.data.body
            const user = res.data.body
            setUser(user)
            setUserMethods(userMethods)
            setAdminMethods(adminMethods)
        }
    }

    const handleClose = () => {
        setShow(false)
        setModalAddMethod(false)
        //setMethodSelected(null)
    }
    const handleShow = () => setShow(true)

    const handleDeleteMethod = async () => {
        await deleteMethod(idMethod)
        setIdMethod('')
        await getUser()
        handleClose()
    }

    useEffect(() => { getUser() }, [])

    return {
        userMethods,
        adminMethods,
        user,
        getUser,
        modalAddMethod,
        setModalAddMethod,
        idMethod,
        setIdMethod,
        show,
        setShow,
        handleShow,
        handleDeleteMethod,
        handleClose,
        idMethSelected, setIdMethSelected
    }
}

export default usePerfil