import urlApi from '../services/urlApi'
import { useNavigate } from 'react-router-dom'
import Joi from 'joi'
import useLoadingStore from '../store/loadingStore'
import useNotify from './useNotify'
import request from '../services/request'

const useRegister = () => {
    const { notify } = useNotify()
    const { setLoading } = useLoadingStore()
    const navigate = useNavigate()
  
    const register = async (e) => {   
        try {
            e.preventDefault()
            setLoading(true)

            const schema = Joi.object({
                name: Joi.string().required().messages({
                    'string.required': 'El campo de nombre es obligatorio',
                }),
                email: Joi.string().email({ tlds: { allow: false } }).required().messages({
                    'string.email': 'El campo de correo electrónico debe ser valido',
                }),
                ci: Joi.string().alphanum().min(7).max(10).required().messages({
                    'string.min': 'La cédula debe tener al menos 7 caracteres',
                    'string.max': 'La cédula debe tener como máximo 10 caracteres'
                }),
                password: Joi.string().min(6).required().messages({
                    'string.min': 'La contraseña debe tener al menos 6 caracteres'
                }),
                phone: Joi.string().min(7).max(12).required().messages({
                    'string.min': 'El campo de teléfono debe ser un número valido'
                }),
                repassword: Joi.string().required().valid(Joi.ref('password')).messages({
                    'any.only': 'Las contraseñas deben coincidir'
                })
            }).with('password', 'repassword');
        

            const data = {
                name: e.target.name.value,
                email: e.target.email.value,
                ci: e.target.ci.value,
                password: e.target.password.value,
                phone: e.target.phone.value,
                repassword: e.target.repassword.value
            };
           
            const { error } = schema.validate(data, { abortEarly: false });

            if (error) {
                error.details.forEach(err => {
                    notify.error(err.message)
                });
                throw error;
            } 
            const url = urlApi + '/register'
            await request.post(url, data)
            setLoading(false)
            notify.success('¡Se ha registrado correctamente! ¡Puede iniciar sesión ahora!')
            navigate('/dashboard')

        } catch (error) {
            setLoading(false)
            if(error.response?.data.message){
                notify.error(error.response?.data.message)
            }
            console.error(error.message)
        }
    }

    return {
        register,
    }
}
export default useRegister