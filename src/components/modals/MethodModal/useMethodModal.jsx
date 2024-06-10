import useErrorManager from '../../../hooks/useErrorManager';
import BancSelect from '../../bancSelect/bancSelect';
import usePerfil from '../../../hooks/usePerfil'
import useMethods from '../../../hooks/useMethods'
import { useState, useCallback } from 'react';
import { Form } from 'react-bootstrap';

const useMethodModal = () => {
    const errorManager = useErrorManager()
    const [methodSelected, setMethodSelected] = useState('')
    const [dataForm, setDataForm] = useState({})
    const { adminMethods, getUser, user } = usePerfil()
    const { sendForm, setMethodName, setImageUrl } = useMethods()

    const handleSave = async () => {
        try {
            // se declara "e" para que sea compatible con el metodo sendForm
            const e = {
                target: Object.keys(dataForm).reduce((acc, key) => {
                    acc[key] = { value: dataForm[key] }
                    return acc;
                }, {}),
                preventDefault: () => { }
            }

            e.target.secondary = { value: "client" }
            e.target.adminMethodId = { value: methodSelected }

            await sendForm(e)
            await getUser()
            setDataForm({})
            // Después de guardar los datos, cierra el modal
        } catch (error) {
            errorManager(error)
        }
    };

    const handleChangeMethod = (event) => {
        if (event.target.value === "0") {
            setMethodSelected("")
            return false
        }
        const [methodCurrent] = adminMethods.filter(method => method._id === event.target.value)
        setMethodName(methodCurrent.methodName)
        setImageUrl(methodCurrent.imageUrl)
        setMethodSelected(event.target.value)
    }

    const handleChangeForm = ({ target }) => {
        const { name, value } = target;
        setDataForm(prevDataForm => ({
            ...prevDataForm,
            [name]: value
        }));
    };

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
                    secondary: method.secondary ? true : false
                    // imageUrl: method.imageUrl
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
                        <Form.Label>{meth}</Form.Label>
                        {meth === "banco" ?
                            <BancSelect change={handleChangeForm} name={meth} />
                            : meth === "cedula" ?
                                <input
                                    className='form-control'
                                    type="text"
                                    name={meth}
                                    value={user.ci}
                                />
                                : meth === "telefono" ?
                                    <input type="text" name={meth} value={user.phone} className='form-control' />

                                    : meth === "correo" ?
                                        <input type="email" name={meth} value={user.email} className='form-control' />
                                        :
                                        <Form.control
                                            type="text"
                                            name={meth}
                                        />
                        }
                    </Form.Group>
                )
            }
        })
    }, [methodSelected]);

    return {
        handleChangeMethod, RenderForm, adminMethods, setDataForm,
        handleSave
    }
}

export default useMethodModal