import { useState, useEffect } from 'react';
import useTicket from './useTicket';
import loadingStore from '../store/loadingStore';
import formatDate from '../services/formatDate'
import { TEXTSTATUS } from '../services/utils';
const useHistory = () => {

    const { getTickets, getAllTickets } = useTicket()

    const [tickets, setTickets] = useState([])
    const [fiteredTickets, setFilteredTickets] = useState([])
    const [options, setOptions] = useState(1)

    const [tab1, setTab1] = useState(true)
    const [tab2, setTab2] = useState(false)

    const { loading } = loadingStore()

    const [dataLocal, setDataLocal] = useState({
        from: formatDate(new Date(),5).split('/').reverse().join('-'),
        to: formatDate(new Date()).split('/').reverse().join('-')
    })

    const stateTickets = async () => {
        const tickets = await getTickets()
        setTickets(tickets)

        const filtered = tickets.filter(ticket => tab1 ? ticket.quinielaType === "1" : ticket.quinielaType === "2")
        setFilteredTickets(filtered)
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
            setFilteredTickets(filtered)
        }
        if (tipoQuiniela === "miniQuiniela") {
            const filtered = tickets.filter(ticket => ticket.quinielaType === "2")
            setFilteredTickets(filtered)
        }
    }


    const handleDate = (data) => {
        setDataLocal({
            ...dataLocal,
            [data.target.id]: data.target.value
        })
    }

    const queryTickets = () => stateTickets()

    const stateAllTickets = async () => {
        const _tickets = await getAllTickets(dataLocal)
        setTickets(_tickets)
        const filtered = _tickets.filter(ticket => tab1 ? ticket.quinielaType === "1" : ticket.quinielaType === "2")
        setFilteredTickets(filtered)
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
        fiteredTickets
    }
}

export default useHistory