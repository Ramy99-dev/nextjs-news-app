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
    
    useEffect(async ()=>{
        console.log(updateWord)
        const data = await  fetch("https://restcountries.com/v3.1/all");
        const countries = await data.json();
        let countriesName = [];
        countries.map((country)=>{
            countriesName.push({name:country.name.common});
        })
        setCountries(countriesName)
    },[])




    return ( 
    <div className={styles.nav}>
        <div className={styles.options}>
      <select className={styles.select}>
          {countriesList.map((country)=>{ 
               return <option key={country.name} value={country?.name}>{country?.name}</option>
          })}
          
        </select>
        <select className={styles.select}>
            <option  value="Sports">Sports</option>
            <option  value="Science">Science</option>
            <option  value="Science">Culture</option>
            <option  value="Science">Music</option>
            <option  value="Science">Technology</option>
        </select>

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