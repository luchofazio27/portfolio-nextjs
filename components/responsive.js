//carousels
import { Carousel } from "react-responsive-carousel";
import { items } from "../public/Items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/responsive.module.css";
export default function ResponsiveCarousel() {
  const { responsive } = items;
  return (
    <div className={styles.container}>
      <Carousel
        showArrows={true}
        showIndicators={true}
        infiniteLoop={true}
        dynamicHeight={false}
        showThumbs={false}
        className={styles.mySwiper}
      >
        {responsive.map((item) => (
          <div
            key={item.id}
            className={`${styles.swipItem} ${styles.darkBackground}`}
            style={{ backgroundImage: `url(${item.backgroundImage})` }}
          >
            <div className={styles.detail}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <a className={styles.web} href={item.externalLink} target="_black">Visitar Web</a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
