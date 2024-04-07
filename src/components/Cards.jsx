import animalImage from '@/images/animals/0-1.png'
import PropTypes from 'prop-types'

const hours = [0, 1, 2, 3, 4, 5]

const Cards = () => hours.map((animal, index) => {
    return (
        <div key={index} className='col-6 col-sm-4 col-md-3 col-lg-2 mb-2'>
            <div className='card bg-card text-light'>
                <div className='pt-2 px-1 text-center'>
                    <img width={"100%"} src={animalImage} />
                    <div className='mt-1'>
                        Num: {animal}
                    </div>
                    <p>2:00 PM</p>
                </div>
            </div>
        </div>
    )
})


Cards.propTypes = {
    content: PropTypes.elementType.isRequired,
}

export default Cards