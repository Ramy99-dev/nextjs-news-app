import styles from '../styles/News.module.css'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router';
import Image from 'next/image';




const News = ({news}) => {
    const router = useRouter();
    return ( 
        <div onClick={()=>{
            router.replace(news.link)
        }} className={styles.news}>
          <FontAwesomeIcon className={styles.star} icon={faStar}/>
          <div className={styles.newsImage}>
           {news.media ?  <Image className={styles.img} loader={() => news.media} src={news.media} width={600} height={300}  />
           :<Image className={styles.img} loader={() => 'https://www.efeca.com/wp-content/uploads/2015/02/world-news-headlines-15-widescreen-wallpaper.jpg'} src={"https://www.efeca.com/wp-content/uploads/2015/02/world-news-headlines-15-widescreen-wallpaper.jpg"} width={600} height={300}  />} 
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