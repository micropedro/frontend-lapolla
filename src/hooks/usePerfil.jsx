import { useEffect, useState } from 'react'
import request from '../services/request'
import urlApi from '../services/urlApi'
import userStore from "../store/userStore"
const usePerfil = () => {

    const [userMethods, setUserMethods] = useState([])
    const [adminMethods, setAdminMethods] = useState([])
    const { user, setUser } = userStore()

    const getUser = async () => {
        const localUser =  JSON.parse(localStorage.getItem('user'))
        const res = await request.get(urlApi + '/user/' + localUser._id)
      
        if (res) {
            const { adminMethods, userMethods } = res.data.body
            const user = res.data.body
            setUser(user)
            setUserMethods(userMethods)
            setAdminMethods(adminMethods)
        }
    }

    useEffect(() => { getUser() }, [])

    return {
        userMethods,
        adminMethods,
        user,
        getUser
    }
}

export default usePerfil