import { getSession,withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Router, useRouter } from 'next/router';
import { useState } from 'react';
import News from '../components/News';
import styles from '../styles/Search.module.css'

export const getServerSideProps = withPageAuthRequired({
     async getServerSideProps(ctx) {
      const session = getSession(ctx.req, ctx.res);

      const data = await fetch(`http://localhost:3000/api/news?user=${session.user.sub}`)
      const stringArr = await data.json()
      const news = stringArr.map((el)=>{
          return JSON.parse(el)
      })
      console.log(news)
      return { props: 
        { news} 
      };
     }
    });

const Favorites = ({news}) => {
    const Router = useRouter();
    const [searchNews, setSearchNews] = useState(null);
    function updateFav(index){
       
        console.log(searchNews)
        let newsList = searchNews==null ? news : searchNews ;
         newsList.splice(index,1)
         setSearchNews([...newsList])
    }
    return (
           
            <div className={styles.newsContainer}>
                 {console.log(searchNews)}
                 {console.log("render")}
            {searchNews!=null  ? searchNews.map((n,i) => {
                        { console.log("test") }
                        return <News  update={updateFav} index={i} fav={true} key={n.title} news={n} ></News>
                    }) : news.map((n,i) => {
                        return <News update={updateFav} index={i} fav={true} key={n.title} news={n} ></News>
                    })}


            </div>
            
        
        
    )
}
 
export default Favorites;