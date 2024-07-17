import { Modal, Button, Form } from 'react-bootstrap';
import { cleanMethods } from '../../../../services/utils'
import useMethodModal from './useMethodModal'
import usePerfil from '../../../../hooks/usePerfil';

const MethodModal = () => {
    const { modalAddMethod, setModalAddMethod, handleClose, adminMethods } = usePerfil()
    const { handleChangeMethod, RenderForm, handleSave } = useMethodModal()

    return (
        <Modal show={modalAddMethod} onHide={setModalAddMethod}>
            <Modal.Header closeButton>
                <Modal.Title>Registrar metodo de pago</Modal.Title>
            </Modal.Header>
            {console.log("adminMethods:" , adminMethods)}
            <Form onSubmit={handleSave}>
                <Modal.Body>
                    <Form.Group controlId="select">
                        <Form.Label>Metodo de pago:</Form.Label>
                        <Form.Control as="select" name='methodName' onChange={handleChangeMethod} >
                            {[{ methodName: "Seleccione metodo de pago", _id: '0' }].concat(cleanMethods(adminMethods)).map(method => {
                                return (
                                    <option key={method._id} value={method._id}>{method.methodName}</option>
                                )
                            })}
                        </Form.Control>
                        <RenderForm />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='' onClick={() => { handleClose(); }}>
                        Cerrar
                    </Button>
                    {/* <input type="submit" className='btn btn-primary' value="Guardar" /> */}
                    <Button type='submit' variant="primary">
                        Guardar
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}

export default MethodModal;
