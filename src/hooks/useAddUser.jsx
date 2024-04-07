import urlApi from '../services/urlApi'
import { useNavigate } from 'react-router-dom'
import useLoadingModalStore from '../store/loadingModalStore'
import useNotify from './useNotify'
import request from '../services/request'
import useErrorManager from './useErrorManager'
const useAddUsers = () => {

    const errorManager = useErrorManager()
    const { notify } = useNotify()
    const { setLoading, setText } = useLoadingModalStore()
    const navigate = useNavigate()

    const sendUserForm = async (e) => {
        /*  setLoading(true) */
        setText('Agregando usuario')
        e.preventDefault()
        const user = {
            name: e.target.name.value,
            phone: e.target.phone.value,
            ci: e.target.ci.value,
            level: Number(e.target.level.value),
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