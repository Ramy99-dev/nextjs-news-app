import { useState, useEffect } from 'react';
import News from '../components/News';
import styles from '../styles/Search.module.css'
import { Oval } from 'react-loader-spinner';
import { Fetch } from '../hooks/useFetch';
import { useLanguage } from '../providers/SearchContext';
import { useRouter } from 'next/router';
import { getSession } from '@auth0/nextjs-auth0';


const TOPICS = ["covid", "science", "tech", "sport", "astronomy", "nature"]


export async function getServerSideProps(context) {

   
  
    const topic = context.params.params[0];
    const language = context.params.params[1]
    const page = context.params.params[2]
    const session = getSession(context.req, context.res);
    const data = (topic == TOPICS[1] || topic == TOPICS[3] || topic == TOPICS[2]) ? await Fetch("all", topic, language, page) : await Fetch(topic, null, language, page);  
      
    return {
        props: {
            news: data,
            topic,
            language
        },

    }
}



const NewsByCateg = ({ news, topic , language }) => {
    const router = useRouter();
    const choosenLanguage = useLanguage();
    const [isLoaded, setIsLoaded] = useState(true);
    const [searchNews, setSearchNews] = useState();
    
  

    useEffect(()=>{
        console.log(language)

        if(language != choosenLanguage)
        {
            router.push(`/${topic}/${choosenLanguage}/1`)
        }
       
    },[choosenLanguage])

    const changePage =  (p) => {

        router.push(`/${topic}/${choosenLanguage}/${p}`)
    }

    

     if(news.length == 0)
    {
        return <div className={styles.notFound}>No Data !</div>
    }
    else {
        return (
            <>
                <div className={styles.newsContainer}>
                     {news?.map((n) => {
                        return <News key={n._id} news={n} />
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

}

export default NewsByCateg;