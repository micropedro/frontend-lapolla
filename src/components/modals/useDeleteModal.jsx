import useModalStore from "../../store/modalStore"
import apiUrl from "../../services/apiUrl"
import axios from "axios"
import useUsers from "../../hooks/useUsers"
import useLoadingModalStore from "../../store/loadingModalStore"
const useDeleteUserModal = () => {
    const { setLoading, setText } = useLoadingModalStore()
    const { getUsers } = useUsers()
    const { setVisible } = useModalStore()

    const closeModal = () => setVisible(false)

    const deleteUser = async ({ _id, name }) => {
        setVisible(false)
        setText("Eliminando usuario: " + name)
        setLoading(true)
        const localToken = JSON.parse(localStorage.getItem('user'))
        if (localToken !== null) {
            const { token } = localToken
            try {

                axios.defaults.headers.post['Authorization'] = `Bearer ${token}`
                const response = await axios.post(apiUrl + "/admin/deleteuser", { _id })
                if (response.data.status === 200) {
                    setLoading(false)
                    getUsers()
                }
            } catch (error) {
                console.log(error.response.data.message || error)
            }
        }

    }

    return {
        closeModal,
        deleteUser
    }
}
export default useDeleteUserModal