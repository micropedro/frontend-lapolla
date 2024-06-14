import useErrorManager from '../../../../hooks/useErrorManager';
import BancSelect from '../../../../components/bancSelect/bancSelect';
import usePerfil from '../../../../hooks/usePerfil'
import useMethods from '../../../../hooks/useMethods'
import { useState, useCallback } from 'react';
import { Form } from 'react-bootstrap';

const useMethodModal = () => {
    const errorManager = useErrorManager()
    const [methodSelected, setMethodSelected] = useState('')
    const { adminMethods, getUser, user, handleClose, idMethSelected, setIdMethSelected } = usePerfil()

    const { sendForm, setMethodName, setImageUrl } = useMethods()

    const handleSave = async (e) => {
        e.preventDefault()
        try {
            handleClose()
            await sendForm(e)
            await getUser()

        } catch (error) {
            errorManager(error)
        }
    };

    const handleChangeMethod = (event) => {
        setIdMethSelected(event.target.value)
        console.log(event.target.value)

        if (event.target.value === "0") {
            setMethodSelected("")
            return false
        }
        const [methodCurrent] = adminMethods.filter(method => method._id === event.target.value)
        setMethodName(methodCurrent.methodName)
        setImageUrl(methodCurrent.imageUrl)
        setMethodSelected(event.target.value)
    }

    const RenderForm = useCallback(() => {
        if (methodSelected === "") return null
        const [method] = adminMethods.filter(method => method._id === methodSelected)
            .map(method => {
                return {
                    banco: method.banco ? true : false,
                    cedula: method.cedula ? true : false,
                    correo: method.correo ? true : false,
                    cuenta: method.cuenta ? true : false,
                    telefono: method.telefono ? true : false,
                    tipo: method.tipo ? true : false,
                    nombre: method.nombre ? true : false,
                    secondary: method.secondary ? true : false,
                    adminMethodId: true
                }
            })

        return Object.keys(method).map(meth => {

            if (!method[meth]) return false
            if (meth === "secondary") {
                return (
                    <Form.Group key={meth} controlId={meth}>
                        <Form.Control type="hidden" name={meth} />
                    </Form.Group>
                )
            } else {
                return (
                    <Form.Group key={meth} controlId={meth}>
                        <Form.Label>{meth !== "adminMethodId" && meth}</Form.Label>
                        {meth === "banco" ?
                            <BancSelect name={meth} />
                            : meth === "cedula" ?
                                <input className='form-control' type="text" name={meth} value={user.ci} readOnly />
                                : meth === "telefono" ?
                                    <input type="text" name={meth} value={user.phone} readOnly className='form-control' />

                                    : meth === "correo" ?
                                        <input type="email" name={meth} value={user.email} readOnly className='form-control' />
                                        : meth === "adminMethodId" ?
                                            <input type="hidden" value={idMethSelected} name={meth} /> :
                                            <Form.Control type="text" name={meth} />
                        }
                    </Form.Group>
                )
            }
        })
    }, [methodSelected]);

    return {
        handleChangeMethod, RenderForm,
        handleSave, setMethodSelected
    }
}

export default useMethodModal