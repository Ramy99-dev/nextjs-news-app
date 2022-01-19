import styles from '../styles/Sidebar.module.css'
import { faHome ,faUser , faSignOutAlt , faStar} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {
    return ( <div className={styles.sidebar}>
        <ul className={styles.listItems}>
            <li><FontAwesomeIcon icon={faHome}/><span>Home</span></li>
            <li><FontAwesomeIcon icon={faUser}/><span>Profile</span></li>
            <li><FontAwesomeIcon icon={faStar}/><span>Favorites</span></li>
            <li><FontAwesomeIcon icon={faSignOutAlt}/><span>Sign Out</span></li>
        </ul>

    </div> );
}
 
export default SideBar;