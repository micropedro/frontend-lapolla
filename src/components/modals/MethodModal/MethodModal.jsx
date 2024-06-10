import { Modal, Button, Form } from 'react-bootstrap';
import { cleanMethods } from '../../../services/utils'
import useMethodModal from './useMethodModal';
// eslint-disable-next-line react/prop-types
const AddBankModal = ({ show, handleClose }) => {
    const { handleChangeMethod, RenderForm, adminMethods, setDataForm, handleSave } = useMethodModal()
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Registrar metodo de pago</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="select">
                        <Form.Label>Metodo de pago:</Form.Label>
                        <Form.Control as="select" onChange={handleChangeMethod} >
                            {[{ methodName: "Seleccione metodo de pago", _id: '0' }].concat(cleanMethods(adminMethods)).filter(m => !m.deleted).map(method => {
                                return (
                                    <option key={method._id} value={method._id}>{method.methodName}</option>
                                )
                            })}
                        </Form.Control>
                        <RenderForm />
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    setDataForm({});
                    handleClose();
                }}>
                    Cerrar
                </Button>
                <Button type='submit' variant="primary" onClick={() => { handleSave(); handleClose() }}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AddBankModal;
