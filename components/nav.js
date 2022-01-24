import styles from '../styles/Nav.module.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useUpdateLanguage } from '../providers/SearchContext';
import { useUser } from '@auth0/nextjs-auth0';
import Image from 'next/image';
import { useRouter } from 'next/router'


const Nav = () => {
    const router = useRouter()
    const { user, error, isLoading } = useUser();
    let searchWord ="";
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
            <input onChange={(e)=>{
                 searchWord = e.target.value;
            }} type="text" placeholder="Search for anything ..." />
            <button onClick={()=>{

                  router.push(`/search/${searchWord}`)
                
            }}><FontAwesomeIcon icon={faSearch}/></button>
            
        </div>
        <div className="auth">
           {user && <div className={styles.user}><Image className={styles.user_img} loader={() => user.picture} src={user.picture} width={50} height={50}  /></div>}
        </div>

    </div> );
}
 
export default Nav;