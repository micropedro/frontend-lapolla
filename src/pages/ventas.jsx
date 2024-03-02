import images from "../images/images"
import Guard from "../components/Guard"
import useVentas from "../hooks/useVentas"
import useNotify from "../hooks/useNotify"
const Ventas = () => {
  const { notify } = useNotify()
  const { animals, selectAnimal } = useVentas()

  const handleSelectedAnimal = (animal) => {
    if (animals.includes(animal)) selectAnimal(animals.filter((i) => i.id !== animal.id))

    if (!animals.includes(animal)) {

      if (animals.length === 6) {
        notify.error("Solo puede seleccionar 6 animales")
        return
      }
      selectAnimal([...animals, animal])
    }
  }

  return (<Guard>
    <div className='px-4 pt-3'>
      <div className="flex-between">
        <h2> Taquilla de ventas </h2>
        <button className="btn btn-primary"> Imprimir </button>
      </div>
      <p>Seleccionados {animals.length} / 6</p>
      <div className="d-flex">
        {animals.length > 0 && animals.map((i, index) => {
          return <div key={index} className="bg-primary text-light animals-list">{i.id === 37 ? "00" : i.id} - {i.name}</div>
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
