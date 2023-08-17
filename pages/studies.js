import Image from "next/image";
import Layout from "@/components/layout";
import styles from "../styles/studies.module.css";
import Link from "next/link";

export default function Studies() {
  return (
    <Layout
      title={"Estudios"}
      description={"Certificaciones y estudios en curso"}
    >
      <main className="container">
        <h1 className="heading">Estudios</h1>

        <div className={styles.content}>
          <Image
            src="/img/diplomaDigitalHouse.jpg"
            width={1000}
            height={800}
            alt="Diploma en Digital House"
          />

          <div>
            <p><b>Programación Web Full Stack</b><br></br><Link href="https://www.digitalhouse.com/ar" target="_black">Digital House</Link><br></br>2022 - 2023</p>

            
            <p>
              <b>Técnico informatico</b> <br></br>IAC<br></br>2009 -
              2010
            </p>

            <p>
              <b>Bachillerato</b> <br></br>Escuela de educación media n° 6 José Gervasio
              Artigas <br></br>2007
            </p>

            <p>
            <b>React - La Guía Completa</b> <br></br><Link href="https://www.udemy.com/" target="_black">Udemy</Link><br></br>Cursando
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
