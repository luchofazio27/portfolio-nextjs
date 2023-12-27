 import styles from '../styles/project.module.css'
 import { items } from "../public/Items.json";
 import Link from 'next/link';

 export default function Project({project}) {
    
     const {name, description, image, url} = project

   return (
     <section className={`${styles.project} project`}>
       <style jsx>{`
           .project {
             background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7) ), url(${image?.data?.attributes?.url})
           }
         `}
         </style>
       <div className={`container ${styles.grid}`}>
         <div className={styles.content}>
           <h2 className={styles.title}>{name}</h2>
           <p>{description}</p>
           <p><Link href={`https://${url}`} target="_black" className={styles.navigation}>Visitar web</Link></p>
         </div>
       </div>
     </section>
   )
 }
