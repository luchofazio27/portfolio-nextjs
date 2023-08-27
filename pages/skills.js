import Layout from "@/components/layout";
import Image from "next/image";
import styles from "../styles/skills.module.css"

export default function Skills() {
  return (
    <Layout title={"Habilidades"} description={"Conocimientos y aprendizajes"}>
      <main>
      <h3 className={styles.title}>Lenguajes</h3>
        <div className={styles.content}>
        <Image
          src="/img/icon-js.png"
          width={58}
          height={50}
          alt="linkedin"
        />
        <Image
          src="/img/icon-html5.png"
          width={58}
          height={48}
          alt="linkedin"
        />
        <Image
          src="/img/icon-css.png"
          width={58}
          height={48}
          alt="linkedin"
        />
        </div>
        
       
        <h3 className={styles.title}>Frameworks y Librerías</h3>
        <div className={styles.content}>
        <Image
          src="/img/icon-react.png"
          width={56}
          height={48}
          alt="linkedin"
        />
        <Image
          src="/img/icon-tailwind-css.png"
          width={48}
          height={48}
          alt="linkedin"
        />
        <Image
          src="/img/icon-bootstrap.png"
          width={50}
          height={48}
          alt="linkedin"
        />
        <Image
          src="/img/icon-next-js.png"
          width={86}
          height={48}
          alt="linkedin"
        />
        <Image
          src="/img/icon-remix.png"
          width={42}
          height={30}
          alt="linkedin"
        />
        </div>
        
        <h3 className={styles.title}>Tecnologías y Herramientas</h3>
        <div className={styles.content}>
        <Image
          src="/img/icon-git.png"
          width={48}
          height={48}
          alt="linkedin"
        />
        <Image
          src="/img/github-icon.svg"
          width={48}
          height={48}
          alt="linkedin"
        />
        <Image
          src="/img/icon-vite.png"
          width={48}
          height={48}
          alt="linkedin"
        />
        <Image
          src="/img/icon-npm.png"
          width={48}
          height={48}
          alt="linkedin"
        />
        </div>       
      </main>
    </Layout>
  );
}
