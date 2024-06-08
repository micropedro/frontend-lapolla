/* eslint-disable react/prop-types */
import formatDate from "../../../../services/formatDate"
import useAnimals from "../../../../hooks/useAnimals"
import { formatIf37 } from "../../../../services/utils"

const MiniCard = ({ children }) => {
    return <div className="px-2 py-1 bg-success d-flex">
        {children}
    </div>
}

const QuinielasTickets = ({ tickets, menu }) => {
    const { animals } = useAnimals()
    return (
        <div>
            <div className="container-fluid">

                {menu === 1 && <div className="row g-1">
                    <div className="col-12 px-1 mb-2 d-flex gap-2 ">
                        <div className="border p-2 shadow">
                            <div>
                                Animalitos de hoy:
                            </div>
                            <div>
                                {animals.length > 0 ? animals.map((animal, index) => <div key={index} className="d-flex mx-1">{formatIf37(animal.animalId)} {animals.length > index + 1 && ','} </div>) : "sin animales"}
                            </div>
                        </div>
                        <div className="border p-2 shadow">
                            Tickets vendidos:
                            <MiniCard> {tickets.length} </MiniCard>
                        </div>
                        <div className="border p-2 shadow">Ganadores con 5 asiertos: {4}</div>
                        <div className="border p-2 shadow">Ganadores con 6 asiertos: {4}</div>
                        <hr />
                    </div>
                </div>
                }
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