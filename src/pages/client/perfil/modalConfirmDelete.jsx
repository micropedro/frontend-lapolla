import { Button, Modal } from "react-bootstrap"
import usePerfil from "../../../hooks/usePerfil"

const ModalConfirmDelete = () => {

    const { show, handleClose, handleDeleteMethod } = usePerfil()

    return <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
            <Modal.Title>Eliminar metodo de pago</Modal.Title>
        </Modal.Header>
        <Modal.Body>esta seguro de eliminar este metodo de pago?</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                cerrar
            </Button>
            <Button variant="danger" onClick={handleDeleteMethod}>
                Eliminar
            </Button>
        </Modal.Footer>
    </Modal>
}

export default ModalConfirmDelete