import useUserStore from '../store/userStore';
const useInitApp = () => {
    const { setUser } = useUserStore()
    const initApp = () => {
        console.log("Aplicacion iniciada Correctamente")
        const localUser = localStorage.getItem('user')
        const user = JSON.parse(localUser)
        if (user !== 'null') setUser(user)
    }

    return {
        initApp
    }
}
export default useInitApp