import styles from '../styles/Nav.module.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchUpdate ,  useSearch, useUpdateLanguage } from '../providers/SearchContext';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';


const Nav = () => {
    const { user, error, isLoading } = useUser();
    let searchWord ="";
    const search = useSearch();
    const updateWord = useSearchUpdate();
    const changeLanguage = useUpdateLanguage();
    
    return ( 
    <div className={styles.nav}>
        <div className={styles.options}>
        <select onChange={(e)=>{
            changeLanguage(e.target.value)
        }} className={styles.select}>
            <option  value="en">English</option>
            <option  value="ar">Arabe</option>
            <option  value="es">Espagnol</option>
            <option  value="fr">French</option>
            <option  value="it">Italien</option>
        </select>
        </div>
        
        
       
        <div className={styles.search}>
            <input onClick={(e)=>{
                 searchWord = e.target.value;
            }} type="text" placeholder="Search for anything ..." />
            <button onClick={()=>{
                   if(searchWord != "en")
                   {
                    updateWord(searchWord)
                    console.log(search)
                   }
                   
                
            }}><FontAwesomeIcon icon={faSearch}/></button>
            
        </div>
        <div className="auth">
           {!user  &&  <Link href="/api/auth/login">Login</Link> }
           {user && <div className={styles.user}><Image className={styles.user_img} loader={() => user.picture} src={user.picture} width={50} height={50}  /><Link href="/api/auth/logout">Logout</Link></div>}
        </div>

    </div> );
}
 
export default Nav;