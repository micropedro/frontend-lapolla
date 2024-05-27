import { useState, useEffect } from 'react';
import useTicket from '../hooks/useTicket';
import loadingStore from '../store/loadingStore';
import formatDate from '../services/formatDate'

const useHistory = () => {

    const { getTickets, getAllTickets } = useTicket()
    const [tickets, setTickets] = useState([])
    const [options, setOptions] = useState(1)
    const { loading } = loadingStore()

    const [dataLocal, setDataLocal] = useState({
        from: formatDate(new Date()).split('/').reverse().join('-'),
        to: formatDate(new Date()).split('/').reverse().join('-')
    })

    const stateTickets = async () => {
        const tickets = await getTickets();
        setTickets(tickets);
    };

    const handleDate = (data) => {
        setDataLocal({
            ...dataLocal,
            [data.target.id]: data.target.value
        })
    }

    const TEXTSTATUS = {
        1: { color: 'warning', text: 'En espera' },
        2: { color: 'danger', text: 'Perdedor' },
        3: { color: 'success', text: 'Ganador' }
    }

    const queryTickets = () => {
        stateTickets()
    }

    const stateAllTickets = async () => {
        const _tickets = await getAllTickets(dataLocal)
        console.log(_tickets)
        setTickets(_tickets)
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
        handleOptions, options
    }
}

export default useHistory