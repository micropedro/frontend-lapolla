import  { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import './depositModal.css'

// eslint-disable-next-line react/prop-types
const DepositModal = ({ show, onHide }) => {
    const [method, setMethod] = useState('');
    const [amount, setAmount] = useState('');
    const [transactionNumber, setTransactionNumber] = useState('');
    const [fromAccount, setFromAccount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos a tu backend para procesar el depósito
        console.log('Método de pago:', method);
        console.log('Monto:', amount);
        console.log('Número de operación:', transactionNumber);
        console.log('Cuenta de origen:', fromAccount);
        // Cerrar el modal después de enviar el formulario
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <div className="modal-content bg-white shadow-md rounded">
                <Modal.Header closeButton>
                    <Modal.Title className="text-lg font-bold">Depósito de dinero</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="method">
                            <Form.Label>Método de pago</Form.Label>
                            <Form.Control as="select" value={method} onChange={(e) => setMethod(e.target.value)}>
                                <option value="">Seleccione el método de pago</option>
                                <option value="Tarjeta de crédito">Tarjeta de crédito</option>
                                <option value="Transferencia bancaria">Transferencia bancaria</option>
                                <option value="PayPal">PayPal</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="amount">
                            <Form.Label>Monto</Form.Label>
                            <Form.Control type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="transactionNumber">
                            <Form.Label>Número de operación</Form.Label>
                            <Form.Control type="text" value={transactionNumber} onChange={(e) => setTransactionNumber(e.target.value)} />
                        </Form.Group>
                        <div className="text-right mt-3">
                            <Button variant="primary" type="submit">Realizar depósito</Button>
                        </div>
                    </Form>
                </Modal.Body>
            </div>
        </Modal>
    );
};

export default DepositModal;
