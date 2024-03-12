import axios from 'axios'
import urlApi from "../services/urlApi"
import useNotificationStore from '../store/notificationStore'
import useLoadingStore from '../store/loadingStore'
import { useState } from 'react'
import useTemporalPass from '../store/temporalPassStore'
import { useNavigate } from 'react-router-dom'

function useRecuperacion() {
  const navigate = useNavigate()
  const { setTemporalPass, temporalPass } = useTemporalPass()
  const gettemporalpass = '/reset/gettemporalpass'
  const setNewPassword = '/reset/setnewpassword'
  const { setNotification, setText } = useNotificationStore()
  const { setLoading } = useLoadingStore()
  const [step, setStep] = useState(1)
  const [userEmail, setUserEmail] = useState('')
  const [userTemporal, setUserTemporal] = useState('')

  const sendTemporalPass = async (e) => {
    e.preventDefault()
    setLoading(true)

    const email = e.target.email.value
    setUserEmail(email)
    const body = { email }
    const result = await axios.post(urlApi + gettemporalpass, body)
    if (result) {
      setText(result.data.message)
      setNotification(true)
      setTemporalPass(result.data.body.temporalPass)
      setStep(2)
    } else {
      setText('A ocurrido un error en la peticion')
      setNotification(true)
    }
    setLoading(false)
  }

  const verifyTemporalPass = (e) => {
    e.preventDefault()
    const temp1 = e.target.temporalPass.value
    const temp2 = temporalPass
    if (temp1 === temp2) {
      setUserTemporal(temp1)
      setNotification(false)
      setStep(3)
    } else {
      setText('Clave temporal invalida')
      setNotification(true)
    }
  }
  const saveNewPassword = (e) => {
    e.preventDefault()

    const password1 = e.target.password1.value
    const password2 = e.target.password2.value
    if (password1 === password2) {
      savePassword(password1)
    } else {
      setText('Las claves deben ser iguales')
      setNotification(true)
    }
  }

  const savePassword = async (password) => {
    setLoading(true)
    const body = {
      password,
      email: userEmail,
      temporalPass: userTemporal
    }
    const response = await axios.post(urlApi + setNewPassword, body)
    setLoading(false)
    if (response) {
      setText('Su clave a sido actualizada con exito')
      setNotification(true)
      navigate('/login')
    }
  }

  return {
    step,
    sendTemporalPass,
    verifyTemporalPass,
    saveNewPassword
  }
}

export default useRecuperacion