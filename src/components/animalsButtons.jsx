import images from "../images/images"
import useVentas from "../hooks/useVentas"
import PropsTypes from 'prop-types'

const AnimalsButtons = ({ handle }) => {
    const { animals } = useVentas()
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="animal-container">
                        {images.animals.map((animal, index) => (
                            <div key={index} className="animal-col">
                                <div onClick={() => handle(animal)} className={!animals.includes(animal) ? "btn-animals" : "btn-animals-selected"}>
                                    <img src={animal.image} className="w-100" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

AnimalsButtons.propTypes = {
    handle: PropsTypes.func.isRequired
}

export default AnimalsButtons