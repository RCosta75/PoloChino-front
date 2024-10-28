
import styles from '../styles/Header.module.css';


function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.left}>
              <img src='hfb'/>
              <span >Shop</span>
              <span>About</span>
            </div>
            <div className={styles.right}>
            <input type="text" placeholder="Search"/>
            <h5>icon</h5>
            <h5>icon</h5>
            <h5>icon</h5>
            </div>
           
        </header>

    )
}
export default Header;