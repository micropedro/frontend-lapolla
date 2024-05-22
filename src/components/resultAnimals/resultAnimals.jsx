import { am_pm_format } from "../../services/utils"
import images from '../../images/images'
/* eslint-disable react/prop-types */
const ResultAnimals = ({ animals, roulet, setModalResult }) => {

    return (<div className="row mb-5">
        <div className="col-12">
            <h4>
                {roulet === 1 && "Ruleta Activa"}
                {roulet === 2 && "La granjita"}
                {roulet === 3 && "Loto Activo"}
            </h4>
        </div>
        {
            animals.length > 0 && animals.filter(i => i.roulet === roulet).map((animal, index) => (
                <div key={index} className="col-4 col-sm-3 col-md-2 mb-2">
                    <div className="card p-2 text-center mx-1">
                        <div>
                            <img src={images.animals.filter(i => i.id === animal.animalId)[0].image} className="w-100" />
                        </div>
                        <div> {animal.name} </div>
                        <div> {am_pm_format(animal.hora)}  </div>
                        <i onClick={() => setModalResult(animal)} className="bi bi-list btn-result" />
                    </div>
                </div>
            ))
        }
    </div>
    )
}

export default ResultAnimals