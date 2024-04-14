import urlApi from '../services/urlApi'
import { useNavigate } from 'react-router-dom'
import useLoadingModalStore from '../store/loadingModalStore'
import useNotify from './useNotify'
import request from '../services/request'
import useErrorManager from './useErrorManager'
import useUserStore from '../store/userStore'
import { validateUserType } from '../services/utils'

const useAddUsers = () => {
    const store = useUserStore()
    const errorManager = useErrorManager()
    const { notify } = useNotify()
    const { setLoading, setText } = useLoadingModalStore()
    const navigate = useNavigate()

    const sendUserForm = async (e) => {
        setLoading(true)
        e.preventDefault()
        const level = Number(e.target.level.value)
        if (!validateUserType(store.user.level, level)) return notify.warn('Datos invalidos')

        setText('Agregando usuario')
        const user = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            ci: e.target.ci.value,
            level,
            email: e.target.email.value,
            password: e.target.password.value,
            admin: e.target.admin.value
        }

        try {

            const savedUser = await request.post(urlApi + '/register', user)
            if (!savedUser) throw 'No se a podido registrar el usuario'
            notify.success('Usuario Registrado con exito')
            navigate('/dashboard/users')
            setLoading(false)
        } catch (error) {
            setLoading(false)
            errorManager(error)
        }
    }

    return {
        sendUserForm
    }
}

export default useAddUsers