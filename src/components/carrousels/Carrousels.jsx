import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../images/banner_apuesta_1.webp'
import banner2 from '../../images/banner_apuesta_2.webp'
import banner3 from '../../images/banner_apuesta_3.webp'
import store from '../../images/appstore.svg'
import play from '../../images/playstore.svg'
import styles from './carrousel.module.css'

const imgContainer = {
    width: '100%',
    paddingTop: '20%',
    position: 'relative',
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
    return (<>
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <div style={imgContainer}>
                        <div className={styles.btnApp1}>
                            <a href='https://github.com/' target='_blank' rel="noreferrer">
                                <img className={styles.btnAppWidth} src={play} width={"100px"} alt="Play Store" />
                            </a>
                            <a href='https://githubs.com/' target='_blank' rel="noreferrer">
                                <img className={styles.btnAppWidth} src={store} width={"100%"} />
                            </a>
                        </div>
                        <img src={banner1} style={img} loading="lazy" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={imgContainer}>
                        <div className={styles.btnApp2}>
                            <a href='https://github.com/' target='_blank' rel="noreferrer">
                                <img className={styles.btnAppWidth} src={play} width={"100px"} alt="Play Store" />
                            </a>
                            <a href='https://githubs.com/' target='_blank' rel="noreferrer">
                                <img className={styles.btnAppWidth} src={store} width={"100%"} />
                            </a>
                        </div>
                        <img src={banner2} style={img} loading="lazy" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div  style={imgContainer}>
                        <div className={styles.btnApp3}>
                            <a href='https://github.com/' target='_blank' rel="noreferrer">
                                <img className={styles.btnAppWidth} src={play} width={"100px"} alt="Play Store" />
                            </a>
                            <a href='https://githubs.com/' target='_blank' rel="noreferrer">
                                <img className={styles.btnAppWidth} src={store} width={"100%"} />
                            </a>
                        </div>
                        <img src={banner3} style={img} loading="lazy" />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    </>);
}

export default CarouselFadeExample;