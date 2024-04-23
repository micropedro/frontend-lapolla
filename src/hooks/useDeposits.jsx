/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import useMethods from "./useMethods"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useDepositStore from "../store/depositStore"
import useErrorManager from "./useErrorManager"
import useLoadingStore from "../store/loadingStore"
import useNotify from "./useNotify"
const useDeposits = () => {
    const { notify } = useNotify()
    const { setLoading } = useLoadingStore()
    const erroManager = useErrorManager()
    const { setDeposits, setFindedUser, userSelected } = useDepositStore()
    const [tab, setTab] = useState(2)
    const { actualMethods, defaultMethod, setDefaultMethod } = useMethods()

    const updateDeposit = async ({ state, _id }) => {

        setLoading(true)

        try {
            const body = { state, _id }
            await request.post(urlApi + '/deposits/update', body)
        } catch (error) {
            erroManager(error)
        }
        await getDeposits()
        setLoading(false)
    }

    const handleMethod = (id) => {
        const newMethod = actualMethods.filter(method => method._id === id)
        setDefaultMethod(newMethod[0])
    }

    const handleForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {

            if (userSelected === null) throw new Error('Debe seleccionar al usuario a recargar')
            if (!defaultMethod) throw new Error('Debe seleccionar un metodo de pago')

            const body = {
                methodName: defaultMethod.methodName,
                nombre: e.target.name.value,
                cedula: e.target.ci.value,
                correo: e.target.email.value,
                telefono: e.target.phone.value,
                operation: e.target.operation.value,
                cuenta: e.target.account.value,
                banco: e.target.bank.value,
                tipo: e.target.type.value,
                depositDate: e.target.operationDate.value,
                userId: userSelected._id,
                monto: e.target.monto.value
            }

            const res = await request.post(urlApi + '/deposits/save', body)
            if (!res) throw new Error('No hubo comunicacion con la base de datos')
            console.log(res)
            setLoading(false)
            getDeposits()
            notify.success("Se le ha recargado con exito a " + userSelected.name)

        } catch (error) {
            erroManager(error)
            setLoading(false)
        }
    }

    const Methods = () => {
        return <div className="card p-2">
            <h3> {defaultMethod?.methodName} </h3>
            <div className="flex-between-start">
                <div>
                    <div> {defaultMethod?.banco} </div>
                    <div> {defaultMethod?.cedula} </div>
                    <div> {defaultMethod?.cuenta} </div>
                    <div> {defaultMethod?.tipo} </div>
                    <div> {defaultMethod?.telefono} </div>
                    <div> {defaultMethod?.nombre} </div>
                    <div> {defaultMethod?.correo} </div>
                </div>
                <div>
                    <div> <img src={defaultMethod?.imageUrl} height={"70px"} alt="" />  </div>
                </div>
            </div>
        </div>
    }

    const getDeposits = async () => {
        setLoading(true)
        try {
            const deposits = await request.get(urlApi + "/deposits")
            setDeposits(deposits.data.body)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            erroManager(error)
        }
    }

    useEffect(() => {
        getDeposits()
    }, [])

    const findUserByCi = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const ci = e.target.ci.value
            if (!ci) throw "Debe ingresar la Cedula de identidad"

            const res = await request.get(urlApi + '/user/ci/' + ci)
            if (res) {
                setFindedUser({ ...res.data.body, state: 2 })
                console.log(res.data.body)
            }
            setLoading(false)

        } catch (error) {
            setFindedUser({ state: 3 })
            erroManager({ message: error })
            setLoading(false)
        }
    }

    return {
        handleMethod, actualMethods,
        defaultMethod, setDefaultMethod,
        tab, setTab, Methods, handleForm,
        updateDeposit, findUserByCi
    }
}

export default useDeposits