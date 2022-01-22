import { useState ,useEffect } from 'react';
import News from '../components/News';
import styles from '../styles/Home.module.css'
import { Oval } from 'react-loader-spinner';
import { useFetch } from '../hooks/useFetch';
import { useLanguage } from '../providers/SearchContext';


const TOPICS = ["covid", "science", "tech", "sport", "astronomy", "nature"]


export async function getStaticProps(context) {
    const topic = context.params.name;
    const data = (topic == TOPICS[1] || topic == TOPICS[3] || topic == TOPICS[2]) ? await useFetch("all", topic , "en" , 1) :await useFetch(topic, null , "en" , 1) ;
    return {
        props: {
            news: data,
            topic
        },
        revalidate: 6000
    }
}
export function getStaticPaths() {

    const paths = TOPICS.map((topic) => {
        return { params: { name: topic } }
    })
    return {
        paths,
        fallback: false
    }

}


const NewsByCateg = ({ news, topic }) => {
    const choosenLanguage = useLanguage();
    const [isLoaded, setIsLoaded] = useState(false);
    const [searchNews, setSearchNews] = useState([]);
    const [topicContent , setTopicContent] = useState();


   
    const changePage = async (p) => {
        
        const  data =  (topic == TOPICS[1] || topic == TOPICS[3] || topic == TOPICS[2]) ?  await useFetch("all" , topic , choosenLanguage , p) : await useFetch(topic , null , choosenLanguage , p );
        setIsLoaded(true)
        setSearchNews(data)
    }

    useEffect(async()=>{
        
        setIsLoaded(false)
        const data = (topic == TOPICS[1] || topic == TOPICS[3] || topic == TOPICS[2]) ? await useFetch("all", topic , choosenLanguage , 1) :await useFetch(topic, null , choosenLanguage , 1) ;
        setSearchNews(data)
        setIsLoaded(true)
      },[choosenLanguage])
      useEffect(async()=>{
        
        setIsLoaded(false)
        const data = (topic == TOPICS[1] || topic == TOPICS[3] || topic == TOPICS[2]) ? await useFetch("all", topic , choosenLanguage , 1) :await useFetch(topic, null , choosenLanguage , 1) ;
        setSearchNews(data)
        setIsLoaded(true)
      },[topic])

    if (isLoaded == false) {
        return <div className={styles.loader}><Oval color="blue" height={100} width={100} /></div>

    }
    else {
        return (
            <>
                <div className={styles.newsContainer}>
                    {console.log(searchNews)}
                    {searchNews.length > 0  ? searchNews.map((n) => {
                        { console.log("test") }
                        return <News news={n} />
                    }) : news.map((n) => {
                        return <News news={n} />
                    })}

                </div>
                <div className={styles.pagination}>
                    {[1, 2, 3, 4, 5].map((nbr) => {

                        return <div onClick={() => {
                            setIsLoaded(false);
                            changePage(nbr)
                        }
                        }>{nbr}</div>
                    })}
                </div>
            </>
        )
    }

}

export default NewsByCateg;