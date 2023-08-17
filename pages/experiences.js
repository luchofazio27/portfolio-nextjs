import Layout from "@/components/layout";
import styles from "../styles/experiences.module.css"

export default function Experiences() {
  return (
    <Layout
      title={"Experiencias laborales"}
      description={"Experiencias laborales, camino recorrido en IT"}
    >
      <main className="container">
        <h1 className="heading">Experiencias</h1>

        <div>
          <div>
            <p>
              <b className={styles.work}>PwC</b><br></br>
              <b className={styles.category}>Specialist Technical Support</b> // <b>dic 2021 - presente.</b><br></br>Soporte al
              usuario interno de forma presencial y remota. Responsable de las
              garantías y coordinación con las marcas de laptops. Manejo de
              ticketera Service Now.
            </p>

            <p>
            <b className={styles.work}>Compumundo / Garbarino</b><br></br>
              <b className={styles.category}>Técnico informático</b> // <b>abr 2013 - dic 2021</b><br></br>
              Asistencia y resolución de problemas internos en sucursales de la
              empresa (Garbarino, Compumundo, Samsung Store, Ipoint, Garbarino
              Viajes) a nivel software, hardware e infraestructura de redes y
              conexión. Armado e instalación de puestos de trabajo (PC,
              periféricos, puesto de red, controlador fiscal, impresora y
              cuponera). Representante y reparación directa de las marcas
              Samsung (Notebooks, tablets y celulares) y Asus (Notebook).
              Técnico en servicio de asistencia al domicilio de cliente
              (reparación a niveles software y asesoramiento sobre diversos
              temas de tecnología).
            </p>

            <p>
            <b className={styles.work}>Depilight</b><br></br>
            <b className={styles.category}>Técnico informático</b> // <b>mar 2011 - abr 2013</b><br></br>Soporte técnico
              para usuario interno (Software y Hardware) en el call center
              central. Administración de sistema interno. Mantenimiento e
              infraestructura tanto en call center como en sucursales. Soporte
              de forma remota y presencial a dichas sucursales sobre consultas o
              urgencias informáticas.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
