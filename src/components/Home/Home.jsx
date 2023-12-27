import styles from './Home.module.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className={styles.hero_container}>
          <h1 className={styles.title}>La gestion de temps</h1>

          <div className={styles.details}>
              <ul>
                <span>Réalisé par</span>
                <li>Snipe harvard</li>
                <li>Snipe harvard</li>
                <li>Snipe harvard</li>
              </ul>

              <ul>
                <span>Encadrée par</span> 
                <li>Teacher</li>
              </ul>
          </div>

      </div>

      <div className={styles.plan_container}>
          <div className={styles.plan}>
            <Link to='/intro' className={styles.btn} role="button">Introduction</Link>
            <Link to='/intro' className={styles.btn} role="button">L'importance de gestion du temps</Link>
            <Link to='/intro' className={styles.btn} role="button">Les défis de la gestion du temps</Link>
            <Link to='/intro'className={styles.btn} role="button">Les methodes de gestion du temps</Link>
            <Link to='/intro' className={styles.btn} role="button">Conclusion</Link>

          </div>

      </div>
    </>
    
  )
}
