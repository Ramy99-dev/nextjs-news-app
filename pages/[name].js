import News from '../components/News';
import styles from '../styles/Home.module.css'

const TOPICS=["covid","science","tech","sport","astronomy","nature"]


export async  function getStaticProps(context)
{
   const topic = context.params.name;
   let data ; 
   if(topic == TOPICS[1] ||topic == TOPICS[3] || topic ==TOPICS[2]  )
   {
    data = await fetch(`https://api.newscatcherapi.com/v2/search?q=all&lang=en&page_size=8&page=1&topic=${topic}`, {
        method: 'GET',
        headers: {
          "x-api-key": "XQ0OyzjNx98O-wH9uW2r5EsmmPXm0zS_NFHC8Pf4meI"
        }
      });
   }
   else{
    data = await fetch(`https://api.newscatcherapi.com/v2/search?q=${topic}&lang=en&page_size=8&page=1`, {
        method: 'GET',
        headers: {
          "x-api-key": "XQ0OyzjNx98O-wH9uW2r5EsmmPXm0zS_NFHC8Pf4meI"
        }
      });
   }
    
  const newsList = await data.json();

  return {
    props: {
      news: newsList.articles
    },
    revalidate: 6000
  }
}
export function getStaticPaths()
{

    const paths = TOPICS.map((topic)=>{
        return {params:{name:topic}}
    })
    return {
        paths,
        fallback:false
    } 
   
}


const NewsByCateg = ({news}) => {
    return (
        <>
          <div className={styles.newsContainer}>
             {news.map((n) => {
              return <News news={n} />
            })}
    
          </div>
          <div className={styles.pagination}>
            {[1,2,3,4,5].map((nbr)=>{
                
              return <div onClick={()=>changePage(nbr)}>{nbr}</div>
            })}
          </div>
        </>
      )
}
 
export default NewsByCateg;