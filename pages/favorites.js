import { getSession,withPageAuthRequired } from '@auth0/nextjs-auth0';
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
    return (
        <>
            <div className={styles.newsContainer}>
                {console.log(news)}
                { news?.map((n) => {
                    return <News key={n.title} news={n} />
                })}

            </div>
            <div className={styles.pagination}>
                {[1, 2, 3, 4, 5].map((nbr) => {

                    return <div key={nbr} onClick={() => {
                        setIsLoaded(false);
                        changePage(nbr)
                    }
                    }>{nbr}</div>
                })}
            </div>
        </>
        
    )
}
 
export default Favorites;