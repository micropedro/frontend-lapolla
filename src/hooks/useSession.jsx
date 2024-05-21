import userStore from '../store/userStore'

const useSession = () => {
    const { setUser } = userStore()
    const closeSession = () => {
        localStorage.removeItem('user')
        setUser({ _id: '', level: 0 })
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