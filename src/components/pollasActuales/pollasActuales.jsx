import images from "../../images/images"
import { formatBalance } from "../../services/formatBalance"
import usePolla from "./usePolla"

const PollasActuales = () => {
    const { pollas } = usePolla()
    return (
        <div className='container p-4'>
            <div className="row bg-polla-actual ">
                <div className="col-6 text-center">
                    <h3>
                        Polla Actual
                    </h3>
                    <div className='px-5 mb-4'>
                        <img className='w-100' src={images.logoGq} />
                    </div>
                    <h2>{formatBalance(pollas.mini)} BS</h2>
                    <p>En premio a repartir</p>
                </div>
                <div className="col-6 text-center">
                    <h3>
                        Polla Actual
                    </h3>
                    <div className='px-5 mb-4'>
                        <img className='w-100' src={images.logoMq} />
                    </div>
                    <h2>{formatBalance(pollas.gran)} BS</h2>
                    <p>En premio a repartir</p>
                </div>
            </div>
        </div>
    )
}

export default PollasActuales