import styles from '../styles/Nav.module.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSearchUpdate ,  useSearch, useUpdateLanguage } from '../providers/SearchContext';

const Nav = () => {
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
            <input onChange={(e)=>{
                 searchWord = e.target.value;
            }} type="text" placeholder="Search for anything ..." />
            <button onClick={()=>{
                    updateWord(searchWord)
                    console.log(search)
                
            }}><FontAwesomeIcon icon={faSearch}/></button>
        </div>


    </div> );
}
 
export default Nav;