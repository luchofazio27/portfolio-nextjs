import Layout from "@/components/layout";
import styles from "../styles/index.module.css";
import ResponsiveCarousel from "@/components/responsive";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Layout
        title={"Inicio"}
        description={"Portfolio Luciano Fazio, proyectos y demas"}
      >
        <div className={styles.titles}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className="heading">Perfil</h2>
            <p>
              <h2>Luciano Nicolas Fazio</h2>
              Programador Web Full Stack Junior<br></br>
              <Image
            src="/img/icon-correo.png"
            width={20}
            height={10}
            alt="mail"
          /> luchofazio@gmail.com<br></br>
              <Image
            src="/img/icon-whatsapp.png"
            width={22}
            height={10}
            alt="whatsapp"
          /> 1125273909<br></br>
              San Fernando, Bs. As.<br></br>
              <br></br>
              Actualmente fortaleciendo habilidades en el mundo del desarrollo
              trabajando en proyectos de práctica con diferentes tecnologías,
              con muchas ganas de trabajar en proyectos reales y seguir por el
              camino del desarrollo web.
              <br></br>
              <br></br>
              Sólida experiencia en el área de soporte técnico, atendiendo al
              usuario interno y a clientes finales, brindando soluciones
              informáticas tanto en software como hardware
            </p>
          </div>
          <div className={styles.carouselContent}>
            <h2 className="heading">Proyectos</h2>
            <ResponsiveCarousel />
          </div>
        </div>
      </Layout>
    </>
  );
}
