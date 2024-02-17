const useSession = () => {
    const closeSession = () => {
        localStorage.removeItem('user')
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