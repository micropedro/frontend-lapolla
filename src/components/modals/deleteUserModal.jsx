import useModalStore from "../../store/modalStore"
import useDeleteUserModal from "./useDeleteModal"

const DeleteUserModal = () => {
    const { closeModal, deleteUser } = useDeleteUserModal()
    const { text, visible, user } = useModalStore()

    if (visible) return (
        <div className="notification-bg">
            <div className="notification-body">
                <div>{text}</div>
                <h5>{user ? user.name : ''}</h5>
                <div className="mt-4">
                    <button className="btn btn-danger mx-2" onClick={() => closeModal()}> Cancelar </button>
                    <button className="btn btn-primary" onClick={() => deleteUser(user)}>
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeleteUserModal