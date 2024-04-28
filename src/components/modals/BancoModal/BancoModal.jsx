import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const AddBankModal = ({ show, handleClose }) => {
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [balance, setBalance] = useState('');

    const handleSave = () => {
        console.log("Guardar datos del banco:", bankName, accountNumber, balance);
        // Después de guardar los datos, cierra el modal
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Registrar Banco</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBankName">
                        <Form.Label>Nombre del Banco</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre del banco"
                            value={bankName}
                            onChange={(e) => setBankName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formAccountNumber">
                        <Form.Label>Número de Cuenta</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el número de cuenta"
                            value={accountNumber}
                            onChange={(e) => setAccountNumber(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBalance">
                        <Form.Label>Tipo de Cuenta</Form.Label>
                        <Form.Control 
                            as="select"
                            // value={accountType}
                            // onChange={(e) => setAccountType(e.target.value)}
                        >
                            <option value="Ahorro">Ahorro</option>
                            <option value="Corriente">Corriente</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => handleClose(false)}>
          Cerrar
                </Button>
                <Button variant="primary" onClick={handleSave}>
          Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default AddBankModal;
