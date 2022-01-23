import styles from '../styles/News.module.css'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router';
import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`
}


const News = ({news}) => {
    const router = useRouter();
    return ( 
        <div onClick={()=>{
            router.replace(news.link)
        }} className={styles.news}>
          <div className={styles.newsImage}>
            <Image className={styles.img} loader={() => news.media} src={news.media} width={600} height={300}  />
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