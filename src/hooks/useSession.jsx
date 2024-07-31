import { useNavigate } from 'react-router-dom'
import userStore from '../store/userStore'

const useSession = () => {
    const navigate = useNavigate()
    const { setUser } = userStore()
    const closeSession = () => {
        localStorage.removeItem('user')
        setUser({ _id: '', level: 0 })
        navigate('/')
    }

    const sessionIsActive = () =>{
        return true
    } 

    return {
        sessionIsActive,
        closeSession
    }
}
export default useSession