/* eslint-disable react-hooks/exhaustive-deps */
import Guard from "../../../components/Guard"
import dateNow from "../../../services/dateNow"
import useQuinielas from "../../../hooks/useQuinielas"
import useLoadingStore from "../../../store/loadingStore"
import Spinner from "../../../components/spinner"
import useAnimals from '../../../hooks/useAnimals'
import { useEffect } from "react"
const Quinielas = () => {
  const { animals } = useAnimals()
  const { loading } = useLoadingStore()
  const { tickets, jugadas, setJugadas, cantGanadores, setCantGanadores, type, setType } = useQuinielas()

  const isWinner = (id) => animals.filter((animal) => animal.animalId === id).length > 0

  const getDate = (date) => {
    const newDate = new Date(date)
    return `${String(newDate.getDate()).padStart(2, '0')}-${String(newDate.getMonth() + 1).padStart(2, '0')}-${newDate.getFullYear()}`
  }

  useEffect(() => {

    if (tickets.length > 0) {
      let cant = 0
      tickets.forEach((ticket) => {
        const ticketWinner = ticket.animals.filter(animal => isWinner(animal.id))
        if (type === "1") {
          if (ticketWinner.length === 6) { cant = cant + 1 }
        } else {
          if (ticketWinner.length === 3) { cant = cant + 1 }
        }
      })
      setCantGanadores(cant)
    }
  }, [tickets, animals, type])

  return (<Guard>
    <div className='flex-between px-4 pt-3 mb-3'>
      <h2> {type === "1" ? 'Gran Quiniela' : 'Mini Quniela'} </h2>
      <div>
        <button onClick={() => setType("1")} className={type === "1" ? "btn btn-primary mx-2" : "btn btn-default mx-2"}>Gran quiniela</button>
        <button onClick={() => setType("2")} className={type === "2" ? "btn btn-primary mx-2" : "btn btn-default mx-2"}>Mini quiniela</button>
      </div>
    </div>
    <div className="mb-2">
      <div>
        Animalitos de hoy
      </div>
      {animals && animals.length > 0 && animals.map((animal, index) =>
        (<button key={index} className="btn btn-success mx-1">{animal.animalId === 37 ? '00' : animal.animalId} </button>)
      )}
    </div>


    {loading && <div className="card p-5 flex-center">
      <Spinner color={"green"} />
    </div>}
    {!loading &&
      <>
        <div className="card p-3 bg-success-2 mb-3">
          <div className="flex-between-start">
            <div>
              <h4 className="text-success mb-0">
                Gran Quiniela: {dateNow.fecha}
              </h4>
            </div>
            <div className="d-flex">
              <div className="jugando"> <i className="bi bi-rocket-takeoff-fill mx-2" /> Jugando ahora <i className="bi bi-rocket-takeoff-fill mx-2" /> </div>
            </div>
          </div>
          <hr />

          <table className="table text-center">
            <thead>
              <tr>

                <th>
                  Jugadas
                </th>
                <th>
                  Ganadores
                </th>
                <th>
                  Total ventas
                </th>
                <th>Ganancias</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {tickets.length}
                </td>
                <td>
                  {cantGanadores}
                </td>
                <td>
                  BS {tickets.length * 25}
                </td>
                <td>
                  BS {tickets.length * 25 * 0.48}
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <div className=" text-center">
              <button onClick={() => setJugadas(!jugadas)} >
                {jugadas ? <>
                  <i className="bi bi-eye-slash-fill" /> No ver jugadas
                </>
                  : <>
                    <i className="bi bi-eye-fill" /> Ver jugadas
                  </>
                }
              </button>
            </div>{jugadas &&
              <div className="container">
                <div className="row p-4">

                  <table>
                    <thead>
                      <tr>
                        <th>Nro</th>
                        <th>Jugada</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                        <th> Ganadores </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tickets.length > 0 && tickets.map((ticket, index) => {
                        return (<tr key={index}>
                          <td> {index + 1} </td>
                          <td className=" d-flex">
                            {ticket.animals.map((animal, index) => {
                              return (
                                <div key={index} className={isWinner(animal.id) ? "animal-success anim-btn2" : "animal-warning anim-btn2"}> {animal.id === 37 ? '00' : animal.id} </div>
                              )
                            })}
                          </td>
                          <td>{getDate(ticket.date)}</td>
                          <td> {ticket.hora} </td>
                          <td>
                            Ganador
                          </td>
                        </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            }
          </div>
        </div>
        <div className="card p-3">
          <div className="flex-between-start">
            <h4 className="text-center text-primary mb-0">
              Finalizada {dateNow.fecha}
            </h4>
            <div>
              <button className="btn btn-success"> Ver ganadores </button>
            </div>
          </div>
          <hr />
          <table className="table text-center">
            <thead>
              <tr>
                <th>
                  Jugadas
                </th>
                <th>
                  Ganadores
                </th>
                <th>
                  Bote Acumulado
                </th>
                <th>Ganancias</th>
              </tr>
            </thead>
            <tbody>
              <tr>

                <td>
                  456
                </td>
                <td>
                  5
                </td>
                <td>
                  BS 456.456,12
                </td>
                <td>
                  BS 1.231,45
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>}

  </Guard >
  )
}
export default Quinielas