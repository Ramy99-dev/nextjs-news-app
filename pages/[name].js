import { useState, useEffect } from 'react';
import News from '../components/News';
import styles from '../styles/Search.module.css'
import { Oval } from 'react-loader-spinner';
import { Fetch } from '../hooks/useFetch';
import { useLanguage } from '../providers/SearchContext';
import { useRouter } from 'next/router';

const TOPICS = ["covid", "science", "tech", "sport", "astronomy", "nature"]


export async function getServerSideProps(context) {
    const topic = context.params.name;
    const data = (topic == TOPICS[1] || topic == TOPICS[3] || topic == TOPICS[2]) ? await Fetch("all", topic, "en", 1) : await Fetch(topic, null, "en", 1);
    return {
        props: {
            news: data,
            topic
        },

    }
}



const NewsByCateg = ({ news, topic }) => {
    const router = useRouter();
    const choosenLanguage = useLanguage();
    const [isLoaded, setIsLoaded] = useState(true);
    const [searchNews, setSearchNews] = useState();
    const [topicContent, setTopicContent] = useState();

    

    const changePage = async (p) => {

        const data = (topic == TOPICS[1] || topic == TOPICS[3] || topic == TOPICS[2]) ? await Fetch("all", topic, choosenLanguage, p) : await Fetch(topic, null, choosenLanguage, p);
        setIsLoaded(true)
        setSearchNews(data)
    }

    useEffect(async () => {
        const data = null ;
        setIsLoaded(false)
        if(choosenLanguage !="en")
        {
    
            data = (topic == TOPICS[1] || topic == TOPICS[3] || topic == TOPICS[2]) ? await Fetch("all", topic, choosenLanguage, 1) : await Fetch(topic, null, choosenLanguage, 1);
    
        }
        
        setSearchNews(data)
        setIsLoaded(true)
    }, [choosenLanguage])
    useEffect(async () => {

        setIsLoaded(false)
        const data = (topic == TOPICS[1] || topic == TOPICS[3] || topic == TOPICS[2]) ? await Fetch("all", topic, choosenLanguage, 1) : await Fetch(topic, null, choosenLanguage, 1);
        setSearchNews(data)
        setIsLoaded(true)
    }, [topic])

    if (isLoaded == false) {
        return <div className={styles.loader}><Oval color="blue" height={100} width={100} /></div>

    }
    else if(searchNews?.length == 0 && searchNews )
    {
        return <div>No Data !</div>
    }
    else {
        return (
            <>
                <div className={styles.newsContainer}>
                    {console.log(news)}
                    {searchNews  ? searchNews.map((n) => {
                        { console.log("test") }
                        return <News key={n.title} news={n} />
                    }) : news.map((n) => {
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

}

export default NewsByCateg;