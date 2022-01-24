import styles from '../styles/Sidebar.module.css'
import { faHome ,
         faUser,
         faMicrochip,
         faAtom, 
         faSignOutAlt, 
         faStar,
         faLandmark,
         faFutbol,
         faSpaceShuttle,
         faLeaf,
         faVirus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUser } from '@auth0/nextjs-auth0';
import { useState } from 'react';
import Link from 'next/link';

const SideBar = () => {
    const { user, error, isLoading } = useUser();
    const [itemsStyle , setItemsStyle] = useState(styles.hidden);
    const [btnStyle , setBtnStyle] = useState(styles.more)
    return ( <div className={styles.sidebar}>
        <ul className={styles.listItems}>
            <Link href="/"><li><FontAwesomeIcon icon={faHome}/><span>Home</span></li></Link>
           {user && <Link href="/"><li><FontAwesomeIcon icon={faUser}/><span>Profile</span></li></Link>}
           {user && <Link href="/"><li><FontAwesomeIcon icon={faStar}/><span>Favorites</span></li></Link>}
            <Link href="/covid"><li className={styles.breaking}><FontAwesomeIcon icon={faVirus}/><span>Covid-19</span></li></Link>
            <Link href="/science"><li><FontAwesomeIcon icon={faAtom}/><span>Science</span></li></Link>
            <Link href="/tech"><li><FontAwesomeIcon icon={faMicrochip}/><span>Technology</span></li></Link>
            <Link href="/sport"><li className={itemsStyle}><FontAwesomeIcon icon={faFutbol}/><span>Sports</span></li></Link>
            <Link href="/astronomy"><li className={itemsStyle}><FontAwesomeIcon icon={faSpaceShuttle}/><span>Astronomy</span></li></Link>
            <Link href="/nature"><li className={itemsStyle}><FontAwesomeIcon icon={faLeaf}/><span>Nature</span></li></Link>
            
            <div className={btnStyle}>
               <button onClick={()=>{
                   setItemsStyle('')
                   setBtnStyle(styles.hideBtn)
               }}>More</button>
            </div>
           {!user && <Link href="/api/auth/login"><li><FontAwesomeIcon icon={faSignOutAlt}/><span>Login</span></li></Link>}
           {user && <Link href="/api/auth/logout"><li><FontAwesomeIcon icon={faSignOutAlt}/><span>Sign Out</span></li></Link>}
        </ul>

    </div> );
}
 
export default SideBar;