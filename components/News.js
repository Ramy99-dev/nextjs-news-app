import styles from '../styles/News.module.css'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router';


const News = ({news}) => {
    const router = useRouter();
    return ( 
        <div onClick={()=>{
            router.replace(news.link)
        }} className={styles.news}>
          <div className={styles.newsImage}>
            <img className={styles.img} src={news.media} alt="" srcset="" />
          </div>
          <div className={styles.newsTitle}>
            <h4>{news.title}</h4>
         
          </div>
          <div className={styles.description}>
            <p>{news.summary}</p>
          </div>
        </div>
       );
}
 
export default News;