import { useState } from "react";
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "../styles/carousel.module.css"

export default function Carousel() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next)
    }

  return (
    <div className={styles.carouselContent}>
      <Slider {...settings}>
      <div className={`${styles.slide} ${currentSlide === 0 ? styles.slide1 : ''}`}>
            <div className={styles.slideContent}>
                <h3>Titulo de la imagen 1</h3>
                <p>Descripcion</p>
            </div>
        </div>
        <div className={`${styles.slide} ${currentSlide === 1 ? styles.slide2 : ''}`}>           
            <div className={styles.slideContent}>
                <h3>Titulo de la imagen 1</h3>
                <p>Descripcion</p>
            </div>
        </div>
        <div className={`${styles.slide} ${currentSlide === 2 ? styles.slide3 : ''}`}>           
            <div className={styles.slideContent}>
                <h3>Titulo de la imagen 1</h3>
                <p>Descripcion</p>
            </div>
        </div>
      </Slider>
    </div>
  )
}
