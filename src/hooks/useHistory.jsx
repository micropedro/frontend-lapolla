import { useState, useEffect } from 'react';
import useTicket from './useTicket';
import loadingStore from '../store/loadingStore';
import formatDate from '../services/formatDate'
import { addAciertos, TEXTSTATUS } from '../services/utils';
import request from '../services/request';
import urlApi from '../services/urlApi';
import useErrorManager from './useErrorManager';
const useHistory = () => {
    const errorManager = useErrorManager()
    const { getTickets, getAllTickets } = useTicket()

    const [tickets, setTickets] = useState([])
    const [fiteredTickets, setFilteredTickets] = useState([])
    const [options, setOptions] = useState(1)
    const [aciertos, setAciertos] = useState(true)
    const [tab1, setTab1] = useState(true)
    const [tab2, setTab2] = useState(false)
    const { loading } = loadingStore()
    const [dataLocal, setDataLocal] = useState({
        from: formatDate(new Date(), 5).split('/').reverse().join('-'),
        to: formatDate(new Date()).split('/').reverse().join('-')
    })

    const handleAciertos = () => {
        setAciertos(!aciertos)
    }

    const stateTickets = async () => {
        const tickets = await getTickets()
        setTickets(tickets)

        const filtered = tickets.filter(ticket => tab1 ? ticket.quinielaType === "1" : ticket.quinielaType === "2")

        setFilteredTickets(addAciertos(filtered))
    }

    const handle = (tipo) => {

        setTab1(tipo ? true : false)
        setTab2(tipo ? false : true)

        if (tipo) filterTickets("granQuiniela")
        if (!tipo) filterTickets("miniQuiniela")
    }

    const filterTickets = async (tipoQuiniela) => {

        if (tipoQuiniela === "granQuiniela") {
            const filtered = tickets.filter(ticket => ticket.quinielaType === "1")
            setFilteredTickets(addAciertos(filtered))
        }
        if (tipoQuiniela === "miniQuiniela") {
            const filtered = tickets.filter(ticket => ticket.quinielaType === "2")
            setFilteredTickets(addAciertos(filtered))
        }
    }

    const handleDate = (data) => setDataLocal({ ...dataLocal, [data.target.id]: data.target.value })

    const queryTickets = () => stateTickets()

    const stateAllTickets = async () => {
        const _tickets = await getAllTickets(dataLocal)
        setTickets(_tickets)
        const filtered = _tickets.filter(ticket => tab1 ? ticket.quinielaType === "1" : ticket.quinielaType === "2")

        setFilteredTickets(addAciertos(filtered))
    }

    const handleOptions = async (option) => {
        if (option === 1) {
            setOptions(1)
            await stateTickets()
        }

        if (option === 2) {
            setOptions(2)
            await stateAllTickets()
        }
    }

    const getTicketsDate = async (e) => {
        try {
            const consulta = {
                usuario: options === 1 ? "propio" : "otros",
                date: e.target.value
            }
            const res = await request.post(urlApi + "/getTicketDate", consulta)
            const quinielaType = tab1 ? "1" : "2"
            const tickets = res.data.body
            const filteredTickets = tickets.filter(ticket => ticket.quinielaType === quinielaType)
            setTickets(tickets)
            setFilteredTickets(addAciertos(filteredTickets))
            console.log(res.data.body)
        } catch (error) {
            errorManager(error)
        }
    }

    const fillx = (name) => {
        if (!name) return ""
        const firstName = name.split(" ")[0]
        const secondNameSplit = name.split(" ")[1]
        if (secondNameSplit) {
            const secondName = secondNameSplit.split("").fill("X").join("")
            return `${firstName ? firstName : ""} ${secondName ? secondName : ""}`
        } else {
            return firstName
        }
    }

    useEffect(() => {
        const newFiltered = aciertos ? fiteredTickets.sort((a, b) => a.numeroDeAciertos - b.numeroDeAciertos) :
            fiteredTickets.sort((a, b) => b.numeroDeAciertos - a.numeroDeAciertos)
        setFilteredTickets(newFiltered)
    }, [aciertos])

    useEffect(() => { stateTickets(); setOptions(1) }, [])

    return {
        tickets,
        loading,
        TEXTSTATUS,
        dataLocal,
        queryTickets,
        handleDate,
        handleOptions, options,
        tab1,
        tab2,
        handle,
        fiteredTickets,
        aciertos,
        handleAciertos,
        getTicketsDate,
        fillx
    }
}

export default useHistory