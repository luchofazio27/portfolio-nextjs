import Image from "next/image"
import Link from "next/link"
import styles from "../styles/footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h7 className={`container ${styles.title}`}>Mis Redes</h7>
      <div className={`container ${styles.content}`}> 
        <nav className={styles.navigation}>
        <Link href="https://www.linkedin.com/in/luciano-fazio" target="_black">
          <Image
            src="/img/linkedin-icon.svg"
            width={50}
            height={30}
            alt="linkedin"
          />
        </Link>
        <Link href="https://github.com/luchofazio27" target="_black">
          <Image
            src="/img/github-icon.svg"
            width={50}
            height={30}
            alt="github"
          />
        </Link>
        <Link href="https://app.netlify.com/teams/luchofazio27/sites" target="_black">
          <Image
            src="/img/netlify-icon.svg"
            width={50}
            height={30}
            alt="netlify"
          />
        </Link>
        <Link href="https://vercel.com/dashboard" target="_black">
          <Image
            src="/img/vercel-icon.svg"
            width={50}
            height={30}
            alt="vercel"
          />
        </Link>
        </nav>
        <h7 className={styles.copyright}>Sitio realizado con NextJS</h7>
        <a className={styles.copyright} href="/CV Luciano Fazio.pdf" download>Descargar mi CV</a>
      </div>
    </footer>
  )
}



