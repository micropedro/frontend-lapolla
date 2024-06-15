import formatDate from "../../../../services/formatDate"
import useAnimals from "../../../../hooks/useAnimals"
import { formatIf37 } from "../../../../services/utils"
import { useEffect, useState } from "react"

const MiniCard = ({ children }) => {
    return <div className="minicard">
        {children}
    </div>
}


const QuinielasTickets = ({ tickets, menu }) => {

    const [asiertos5, setAsiertos5] = useState(0)
    const [asiertos6, setAsiertos6] = useState(0)
    const { animals } = useAnimals()


    useEffect(() => {
        if (tickets.length > 0) {
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
    }, [tickets, animals])

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
                                                <div key={index} className="result-animal-in">{formatIf37(animal.animalId)} {animals.length > index + 1} </div>
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
                                    <MiniCard> {tickets.length} </MiniCard>
                                </div>
                            </div>
                            <div className="col-3 min-h-x">
                                <div className="comun-wrap-quiniela bg-light-3">
                                    <div>
                                        Ganadores con 5 asiertos
                                    </div>
                                    <MiniCard> {asiertos5} </MiniCard>
                                </div>
                            </div>
                            <div className="col-3 min-h-x">
                                <div className="comun-wrap-quiniela bg-light-4">
                                    <div>
                                        Ganadores con 6 asiertos
                                    </div>
                                    <MiniCard> {asiertos6} </MiniCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
                
                <div className="row g-2">
                    {tickets?.length > 0 && tickets.map((ticket) => {

                        return <div key={ticket._id} className="col-12 col-lg-6 col-xl-4">
                            <div className="card p-2">
                                <div className="px-2 text-sm  flex-between ">
                                    {ticket.user.name}
                                    <div>{String(ticket.count).padStart(3, "0")}-{ticket.code}</div>
                                </div>
                                <div className="px-2 mb-3 flex-between text-sm text-secondary">
                                    <div className="">{ticket.quinielaType === "1" ? 'Gran' : 'Mini'} Quiniela</div>
                                    <div className="">{formatDate(ticket.date)}</div>
                                </div>
                                <div className="container-fluid">
                                    <div className="row">
                                        {ticket.animals.map((animal, index) => {
                                            const arrayAnimals = []
                                            animals.forEach(i => arrayAnimals.push(i.animalId))
                                            const styleCard = arrayAnimals.includes(animal.id)

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