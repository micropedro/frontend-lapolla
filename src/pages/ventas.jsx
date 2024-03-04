import images from "../images/images"
import Guard from "../components/Guard"
import useVentas from "../hooks/useVentas"
import dateNow from "../services/dateNow"
import Ticket from "../components/modals/ticket"
const Ventas = () => {

  const { animals, handleSelectedAnimal, saveAndPrint } = useVentas()

  return (<Guard>
    <Ticket animals={animals} />
    <div className='px-4 pt-3'>
      <div className="flex-between">
        <h2> Taquilla de ventas </h2>
        <button onClick={saveAndPrint} className="btn btn-primary"> Imprimir </button>
      </div>
      <b> {dateNow} </b>
      <div>Seleccionados {animals.length} / 6</div>
      <div className="animals-content">
        {animals.length > 0 && animals.map((i, index) => {
          return <div key={index} className="bg-dark m-1 p-2 anim-btn">
            <div className="text-light">
              {i.id === 37 ? "00" : i.id} - {i.name}
            </div>
            <div className="delete-animal" />  </div>
        })}
      </div>
    </div>
    <hr />
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="animal-container">
            {images.animals.map((animal, index) => {
              return <div key={index} className="animal-col">
                <div onClick={() => handleSelectedAnimal(animal)} className={!animals.includes(animal) ? "btn-animals" : "btn-animals-selected"}>
                  <img src={animal.image} className="w-100" />
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  </Guard >
  )
}
export default Ventas
