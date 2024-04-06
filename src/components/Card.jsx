import animal from '@/images/animals/0-1.png'
import { number } from 'joi'
import PropTypes from 'prop-types'

const Card = ({ width, height, content }) => {
    const Content = content
    return (
        <div 
            className='card bg-warning bg-gradient' 
            style={{ width: width ?? '160px', height: height ?? '200px' }}
        >
            <Content animal={animal} />
        </div>
    )
}

Card.propTypes = {
    content: PropTypes.elementType.isRequired, 
    width: number,
    height: number
}

export default Card