import styles from '../styles/News.module.css'
import { faStar , faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from 'next/router';
import Image from'next/image';
import { useUser } from '@auth0/nextjs-auth0';
import { useEffect, useState } from 'react';



const News = ({ news , fav , update ,index }) => {
  const { user, error, isLoading } = useUser();
  const [starStyle , setStarStyle] = useState(styles.iconStar)
  const router = useRouter();

 
  const addFav = async () => {
    setStarStyle(styles.fav)
    let data = await fetch('http://localhost:3000/api/news', {
      method: 'POST',
      headers: {

        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user.sub, news })
      

    })
    console.log(data)
  }

  const removeFav = async () => {
    update(index)
    let data = await fetch('http://localhost:3000/api/news', {
      method: 'DELETE',
      headers: {

        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user.sub, news })
      

    })
    
    console.log(data)
  }

  
  return (
    <div className={styles.news}>
      {(!fav && user )&& <FontAwesomeIcon onClick={addFav} className={starStyle} icon={faStar} />}
      {fav && <FontAwesomeIcon onClick={removeFav} className={styles.iconTrash} icon={faTrash} />}
      {!fav && news.favorite && <FontAwesomeIcon  className={styles.fav} icon={faStar} />}
      <div className={styles.newsImage}>
        {news.media ? <Image className={styles.img} loader={() => news.media} src={news.media} width={600} height={300} />
          : <Image className={styles.img} loader={() => 'https://www.efeca.com/wp-content/uploads/2015/02/world-news-headlines-15-widescreen-wallpaper.jpg'} src={"https://www.efeca.com/wp-content/uploads/2015/02/world-news-headlines-15-widescreen-wallpaper.jpg"} width={600} height={300} />}
      </div>
      <div className={styles.newsTitle}>
        <h4 onClick={() => {
          router.replace(news.link)
        }}>{news.title}</h4>
      </div>
      <div className={styles.description}>
        <p>{news.summary}</p>
      </div>
    </div>
  );
}

export default News;