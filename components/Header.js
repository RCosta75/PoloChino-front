import styles from '../styles/Header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser, faCartShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'









function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
              <img src='polo-logo.png'/>
              <span>Shop</span>
              <span>About</span>
            </div>
            <div className={styles.right}>
            <input type="text" placeholder="Search"/>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <FontAwesomeIcon icon={faCartShopping} />
            <FontAwesomeIcon icon={faUser} />
            </div>
           
        </header>

    )
}
export default Header;