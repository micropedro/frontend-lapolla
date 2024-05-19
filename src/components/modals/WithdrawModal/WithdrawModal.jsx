import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import userStore from "../../../store/userStore"
import './withdrawModal.css';
import usePerfil from '../../../hooks/usePerfil'
import useRetiros from '../../../hooks/useRetiros'
import useNotify from "../../../hooks/useNotify"

// eslint-disable-next-line react/prop-types
const WithdrawModal = ({ show, onHide }) => {
    const [method, setMethod] = useState('');
    const { notify } = useNotify()
    const [amount, setAmount] = useState('');
    const [ methodSelected, setMethodSelected] = useState('');
    const { addRetiro } = useRetiros()
    const { userMethods, setUserMethods } = usePerfil()
    const [ detailsMethodAdmin, setDetailsMethodAdmin] = useState({})
    const { user } = userStore()

    const handleChangeMethod = (event) => {
        if(event.target.value === "0") {
            setDetailsMethodAdmin({})
            setMethodSelected("")
            return false
        }
        
        const [methodCurrent] = userMethods.filter(method => method._id === event.target.value)
     
        setDetailsMethodAdmin(event.target.value)
        setMethodSelected(event.target.value)
    }

    const handleSave = async () => {
        try {
            onHide();
            await addRetiro({
                payMethodId: methodSelected,
                amount
            }) 
            notify.success("Retiro registrado correctamente")
        } catch(e) {
            notify.error("ha ocurrido un error")
        } finally {
            setMethodSelected("")
            setAmount('')
        }
    }

    return (
        <Modal show={show} onHide={onHide} centered>
            <div className="modal-content bg-white shadow-md rounded">
                <Modal.Header closeButton>
                    <Modal.Title className="text-lg font-bold">Retiro de dinero</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="select">
                            <Form.Label>Metodo de pago:</Form.Label>
                            {user?.userMethods && (
                                <Form.Control as="select" onChange={handleChangeMethod} >
                                    {[{ methodName: "Seleccione metodo de pago", _id: '0'  }].concat(user.userMethods).map( method => {
                                        return (
                                            <option key={method._id} value={method._id}>{method.methodName}</option>
                                        )
                                    })}
                                </Form.Control>
                            )}     
                        </Form.Group>
                        <Form.Group controlId="amount">
                            <Form.Label>Monto</Form.Label>
                            <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </Form.Group>
                        <div className="text-right mt-3">
                            <Button variant="primary" onClick={handleSave}>Registrar retiro</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </div>
        </Modal>
    );
};

export default WithdrawModal;
