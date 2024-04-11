import Carousel from 'react-bootstrap/Carousel';
import banner1 from '@/images/banner_apuesta_1.webp'
import banner2 from '@/images/banner_apuesta_2.webp'
import banner3 from '@/images/banner_apuesta_3.webp'

const imgContainer = {
    width: '100%',
    paddingTop: '20%'
}
  
const img = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px'
}

function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <div style={imgContainer}>
                    <img src={banner1} style={img} loading="lazy" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div style={imgContainer}>
                    <img src={banner2} style={img} loading="lazy" />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div  style={imgContainer}>
                    <img src={banner3} style={img} loading="lazy" />
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;