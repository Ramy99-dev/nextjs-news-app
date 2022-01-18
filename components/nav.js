import styles from '../styles/Nav.module.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = () => {
    return ( 
    <div className={styles.nav}>
        <div className={styles.options}>
        <select className={styles.select}>
            <option  value="San Francisco , California">San Francisco , California</option>
        </select>
        <select className={styles.select}>
            <option  value="Sports">Sports</option>
        </select>
        <input className={styles.calendar} type="date" name="" id="" />
        </div>
        
       
        <div className={styles.search}>
            <input  type="text" placeholder="Search for anything ..." />
            <button><FontAwesomeIcon icon={faSearch}/></button>
        </div>


    </div> );
}
 
export default Nav;