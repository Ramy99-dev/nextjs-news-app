import styles from '../styles/News.module.css'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const News = () => {
    return ( 
        <div className={styles.news}>
          <div className={styles.newsImage}>
            <img className={styles.img} src="https://hbs-grand-vallat.fr/wp-content/uploads/2020/06/Breaking-news.jpg" alt="" srcset="" />
          </div>
          <div className={styles.newsTitle}>
            <h1>Title</h1>
            <FontAwesomeIcon className={styles.icon} icon={faStar}/>
          </div>
          <div className={styles.description}>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex odit magni itaque explicabo, dolorum cupiditate natus ab esse iure vel nobis suscipit a doloribus possimus, aliquam exercitationem quam alias deserunt.</p>
          </div>
        </div>
       );
}
 
export default News;