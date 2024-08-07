import { Card, Collapse } from "react-bootstrap"
import useWinnerStore from "./winerStore"
import { formatDate2 } from "../../../services/formatDate"
const WinerModal = () => {
    const { visible, setVisible, data } = useWinnerStore()
    /* if (visible) */ return (
        <div className={visible ? "bg-modal" : "bg-spaecialModal"}>
            <Collapse in={visible} dimension="width">
                <div id="example-collapse-text">
                    <Card body style={{ width: '95vw', height: '90vh', backgroundColor: '#311754dd' }}>
                        <div className="flex-between">
                            <div className="text-light">
                                Lista de ganadores</div>
                            <button onClick={() => setVisible(false)} className="btn-close bg-light p-1"></button>
                        </div>
                        <div className="p-2">
                            <h3 className="text-warning">
                                {data?.ganadores6Asiertos === 0 ? "No hubo ganadores" : data?.ganadores6Asiertos === 1 ?
                                    "1 ganador" : `${data?.ganadores6Asiertos} ganadores`}
                            </h3>
                        </div>
                        {data?.winners?.length > 0 &&
                            <>
                                {data.winners.map(ticket => {
                                    return <div className="card p-2 shadow mb-3" key={ticket._id}>
                                        <h3 className="text-success text-center"> Ganador: {ticket.user.name}</h3>
                                        <div className="flex-between">
                                            <div className="">
                                                <div className="text-gray">
                                                    {formatDate2(ticket.date)}
                                                </div>
                                                {/* <div>
                                                    #{ticket.count} 
                                                </div> */}
                                                <h3 className="text-success">
                                                    Premio {(data.count * 0.8 * data.precioQuiniela / data.winners.length).toFixed(2)} BS
                                                </h3>
                                            </div>
                                            <div className="d-flex bg-success">
                                                {ticket.animals.map(animal => {
                                                    return <div className="" key={animal.id}>
                                                        <img height={"80px"} src={animal.image} alt="" />
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                })}
                            </>
                        }
                        <div className="text-center mt-2">
                            <button onClick={() => setVisible(false)} className="btn text-light"> Cerrar</button>
                        </div>
                    </Card>
                </div>

            </Collapse >

        </div >
    )
}

export default WinerModal

/* className="card p-4 winner-body" */