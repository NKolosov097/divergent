import styles from './Header.module.css'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link to='/divergent' className={styles.btn} >Divergent</Link>
    </header>
  )
}
