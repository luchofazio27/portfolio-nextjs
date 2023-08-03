import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

export default function Header() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href={"/"}>
          <Image
            src="/img/fotoCV.jpeg"
            width={150}
            height={30}
            alt="Foto de perfil"
          />
        </Link>
        <nav className={styles.navigation}>
          <Link
            href="/"
            className={router.pathname === "/" ? styles.active : ""}
          >
            Inicio
          </Link>

          <Link
            href="/studies"
            className={router.pathname === "/studies" ? styles.active : ""}
          >
            Estudios
          </Link>

          <Link
            href="/experiences"
            className={router.pathname === "/experiences" ? styles.active : ""}
          >
            Experiencias
          </Link>

          <Link
            href="/skills"
            className={router.pathname === "/skills" ? styles.active : ""}
          >
            Skills
          </Link>
          
        </nav>
      </div>
    </header>
  );
}
