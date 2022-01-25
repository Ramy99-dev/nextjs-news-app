import { getSession,withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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

      return { props: 
        { news} 
      };
     }
    });

const Favorites = ({news}) => {
    const Router = useRouter();
    const [searchNews, setSearchNews] = useState(null);
    
    let [styleContainer , setStyleContainer] = useState(styles.newsContainer)
    useEffect(()=>{ 
        
       if(news.length < 4) 
       {
           setStyleContainer(styles.fullHeight) 
       }
    },[])
    function updateFav(index){
       
        let newsList = searchNews==null ? news : searchNews ;
         newsList.splice(index,1)
         setSearchNews([...newsList])
         if(searchNews?.length < 4) 
         {
             setStyleContainer(styles.fullHeight) 
         }
    }
    if(searchNews?.length == 0 || news.length== 0)
    {
        return <div className={styles.notFound}>No Data !</div>
    }
    return (
           
            <div className={styleContainer}>
  
            {searchNews!=null  ? searchNews.map((n,i) => {
                        return <News  update={updateFav} index={i} fav={true} key={n.title} news={n} ></News>
                    }) : news.map((n,i) => {
                        return <News update={updateFav} index={i} fav={true} key={n.title} news={n} ></News>
                    })}


            </div>
            
        
        
    )
}
 
export default Favorites;