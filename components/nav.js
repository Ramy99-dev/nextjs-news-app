import styles from '../styles/Nav.module.css'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {useEffect , useState} from 'react';
import { useSearchUpdate ,  useSearch } from '../providers/SearchContext';
import Home, { refreshHome } from '../pages';

const Nav = () => {
    const [countriesList , setCountries] = useState([]);
    let searchWord ="";
    const search = useSearch();
    const updateWord = useSearchUpdate();
    
    




    return ( 
    <div className={styles.nav}>
        <div className={styles.options}>
     
      

        <select className={styles.select}>
            <option  value="Sports">English</option>
            <option  value="Science">Arabe</option>
            <option  value="Science">Espagnol</option>
            <option  value="Science">French</option>
            <option  value="Science">Italien</option>
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