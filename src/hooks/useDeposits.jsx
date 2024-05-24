/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import useMethods from "./useMethods"
import request from "../services/request"
import urlApi from "../services/urlApi"
import useDepositStore from "../store/depositStore"
import useErrorManager from "./useErrorManager"
import useLoadingStore from "../store/loadingStore"
import useUserStore from "../store/userStore"
import useNotify from "./useNotify"

const useDeposits = () => {
    const { notify } = useNotify()
    const { setLoading } = useLoadingStore()
    const erroManager = useErrorManager()
    const { setDeposits, setFindedUser, userSelected, deposits } = useDepositStore()
    const [tab, setTab] = useState(2)
    const { actualMethods, defaultMethod, setDefaultMethod } = useMethods()
    const { user } = useUserStore()

    const updateDeposit = async ({ status, _id }) => {

        setLoading(true)

        try {
            const body = { status, _id }
            await request.post(urlApi + '/deposits/update', body)
            
        } catch (error) {
            erroManager(error)
        }
        await getDeposits()
        setLoading(false)
    }

    const handleMethod = (id) => {

        console.log(id)

        const newMethod = actualMethods.filter(method => method._id === id)
        console.log(newMethod[0])
        setDefaultMethod(newMethod[0])
    }

    const handleForm = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {

            if (userSelected === null) throw new Error('Debe seleccionar al usuario a recargar')
            if (!defaultMethod) throw new Error('Debe seleccionar un metodo de pago')

            const body = {
                userId: userSelected._id,
                operationRef: e.target.operation.value,
                amount: Number(e.target.monto.value),
                adminMethodId: defaultMethod._id
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
        /* if (user.level === 5) return */ // --> no llenar el estado de depositos del administrador
        //no me toques mi codigo!!!
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

    const getDepositUser = async () => {
        //if(user.level !== 5) return // --> no llenar el estado de depositos del usuario o cliente normal
        try {
            setLoading(true)
            const deposits = await request.get(urlApi + "/deposit/" + user._id) ?? []
            setDeposits(deposits?.data?.body ?? [])
            // setLoading(false)
        } catch (error) {
            erroManager(error)
        } finally {
            setLoading(false)
        }
    }

    const addDeposit = async (data) => {
        try {
            setLoading(true)
            await request.post(urlApi + "/deposits/save", {
                userId: user._id,
                adminMethodId: data.methodSelected,
                operationRef: data.transactionNumber,
                amount: Number(data.amount)
            })
            getDepositUser()
            setLoading(false)
        } catch (error) {
            erroManager(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const urlCurrent = new URL(location.pathname, window.location.origin);
        const isTransacctionPage = urlCurrent.pathname.slice(1) === 'transactions';
        if(user.level === 1 && !isTransacctionPage){
            getDeposits()
        }else{
            setDeposits([])
            getDepositUser()
        }
    }, [])

    const findUserByCi = async (e) => {
        if (e?.target) e.preventDefault()
        
        setLoading(true)
        try {
            const ci = e?.target?.ci?.value || e
            if (!ci) throw "Debe ingresar la Cedula de identidad"

            const res = await request.get(urlApi + '/user/ci/' + ci)
            if (res) {
                setFindedUser({ ...res.data.body, state: 2 })
                setLoading(false)
                return res.data.body
            }
            setLoading(false)
            return false

        } catch (error) {
            setFindedUser({ state: 3 })
            erroManager({ message: error })
            setLoading(false)
        }
    }

    return {
        handleMethod, actualMethods, deposits, addDeposit,
        defaultMethod, setDefaultMethod,
        tab, setTab, Methods, handleForm,
        updateDeposit, findUserByCi
    }
}

export default useDeposits