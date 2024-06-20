import formatDate from "../../../../services/formatDate"
import useAnimals from "../../../../hooks/useAnimals"
import { formatIf37 } from "../../../../services/utils"
import { useEffect, useState } from "react"
import MiniCard from "../../../../components/minicard/Minicard"

const QuinielasTickets = ({ tickets, menu, quinielaSelected = 1 }) => {

    const [asiertos5, setAsiertos5] = useState(0)
    const [asiertos6, setAsiertos6] = useState(0)
    const [aciertos3, setAciertos3] = useState(0)
    const [typeTicket, setTypeTicket] = useState([])
    const { animals } = useAnimals()

    const aciertosGranQuiniela = (tickets) => {
        let as5 = 0
        let as6 = 0
        tickets.forEach(ticket => {
            let count = 0
            ticket.animals.forEach(animal => {
                const mapingAnimals = animals.map(a => a.animalId)
                if (mapingAnimals.includes(animal.id)) count = count + 1
            })
            if (count === 5) as5 = as5 + 1
            if (count === 6) as6 = as6 + 1
        })
        setAsiertos5(as5)
        setAsiertos6(as6)
    }

    const aciertosMiniQuiniela = (tickets) => {
        let ac3 = 0
        tickets.forEach(ticket => {
            let count = 0
            ticket.animals.forEach(animal => {
                const mapingAnimals = animals.map(a => a.animalId)
                if (mapingAnimals.includes(animal.id)) count = count + 1
            })
            if (count === 3) ac3 = ac3 + 1
        })
        setAciertos3(ac3)
    }

    const MapTicket = (tickets) => tickets.filter(ticket => Number(ticket.quinielaType) === Number(quinielaSelected))

    useEffect(() => {
        setTypeTicket(() => MapTicket(tickets))
        const ticketsAux = MapTicket(tickets)
        if (typeTicket.length > 0) {
            quinielaSelected === 1 && aciertosGranQuiniela(ticketsAux)
            quinielaSelected === 2 && aciertosMiniQuiniela(ticketsAux)
        }
    }, [tickets, animals, quinielaSelected])

    return (
        <div>
            <div className="container-fluid">

                {menu === 1 && <div className="row g-0">
                    <div className="col-12">
                        <div className="row mb-3">
                            <div className="col-3 min-h-x">
                                <div className="comun-wrap-quiniela bg-light-1">
                                    <div className="mb-2">
                                        Animalitos de hoy
                                    </div>
                                    <div className="row gap-2 flex-center" >
                                        {animals.length > 0 ? animals.map((animal, index) => {
                                            return (
                                                <div key={index} className="result-animal-in">
                                                    <div>{formatIf37(animal.animalId)}</div>
                                                    <div className="text-gray">{animal.hora}</div>
                                                </div>
                                            )
                                        }) : <>sin animales</>}
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 min-h-x">
                                <div className="comun-wrap-quiniela bg-light-2">
                                    <div>
                                        Tickets vendidos
                                    </div>
                                    <MiniCard> {typeTicket.length} </MiniCard>
                                </div>
                            </div>
                            {quinielaSelected === 1 && (<>
                                <div className="col-3 min-h-x">
                                    <div className="comun-wrap-quiniela bg-light-3">
                                        <div>
                                            Ganadores con 5 aciertos
                                        </div>
                                        <MiniCard> {asiertos5} </MiniCard>
                                    </div>
                                </div>
                                <div className="col-3 min-h-x">
                                    <div className="comun-wrap-quiniela bg-light-4">
                                        <div>
                                            Ganadores con 6 aciertos
                                        </div>
                                        <MiniCard> {asiertos6} </MiniCard>
                                    </div>
                                </div>
                            </>)}
                            {quinielaSelected === 2 && (<>
                                <div className="col-3 min-h-x">
                                    <div className="comun-wrap-quiniela bg-light-3">
                                        <div>
                                            Ganadores con 3 aciertos
                                        </div>
                                        <MiniCard> {aciertos3} </MiniCard>
                                    </div>
                                </div>
                            </>)}
                        </div>
                    </div>
                </div>}

                <div className="row g-2">

                    {typeTicket?.length > 0 && typeTicket.map((ticket) => {
                        return <div key={ticket._id} className="col-12 col-lg-6 col-xl-4">
                            <div className="card p-2">
                                <div className="text-sm text-center text-success pb-2">
                                    <b> {ticket.quinielaType === "1" ? "Gran Quiniela:" : "Mini Quiniela:"}</b> {ticket.idQuiniela.slice(-6)}
                                </div>
                                <div className="px-2 text-sm  flex-between">
                                    {ticket.user.name}
                                    <div className="text-end">
                                        Estado
                                        <div className="bg-gray px-2 text-dark text-center rounded mb-1">
                                            {ticket.status === 1 && "Jugando"}
                                            {ticket.status === 2 && "Ganador por Cobrar"}
                                            {ticket.status === 3 && "Pagado"}
                                        </div>
                                        {String(ticket.count).padStart(3, "0")}-{ticket.code}
                                    </div>
                                </div>
                                <div className="px-2 mb-3 flex-between text-sm text-secondary">
                                    <div className="">{formatDate(ticket.date)}</div>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        {ticket.animals.map((animal, index) => {
                                            const arrayAnimals = animals.map(i => i.animalId)
                                            const arrayAnimalsMini = animals.filter(i => [15, 16, 17, 18, 19].includes(Number(i.hora))).map(i => i.animalId)
                                            const styleCard = ticket.quinielaType === "1" ? arrayAnimals.includes(animal.id) : arrayAnimalsMini.includes(animal.id)

                                            return (<div key={index} className="col-2 mb-2" >
                                                <div className={`bg-${styleCard && menu === 1 ? "success text-light" : "secondary-light"} text-center`}>
                                                    {formatIf37(animal.id)}
                                                </div>
                                            </div>)
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default QuinielasTickets