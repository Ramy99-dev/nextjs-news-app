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
    const session = getSession(context.req, context.res);
    const data = (topic == TOPICS[1] || topic == TOPICS[3] || topic == TOPICS[2]) ? await Fetch("all", topic, language, 1) : await Fetch(topic, null, language, 1);
    if(session?.user)
    {
        let dbData = await fetch(`http://localhost:3000/api/news?user=${session.user.sub}`)
        let stringArr = await dbData.json()
        let newsArr = stringArr.map((el)=>{
            return JSON.parse(el)
        })

        newsArr.map((el)=>{
            let index = data.indexOf(el)
            console.log("INDEX")
            console.log(data[index])
            //data[index] = {'news': data[index].news , favorite:true}
        })


    }
    
    
    
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
    
    useEffect(()=>{console.log(news)},[news])

    useEffect(()=>{
        router.push(`/${topic}/${choosenLanguage}`)
    },[choosenLanguage])

    const changePage = async (p) => {

        const data = (topic == TOPICS[1] || topic == TOPICS[3] || topic == TOPICS[2]) ? await Fetch("all", topic, choosenLanguage, p) : await Fetch(topic, null, choosenLanguage, p);
        setIsLoaded(true)
        setSearchNews(data)
    }

    

    if (isLoaded == false) {
        return <div className={styles.loader}><Oval color="blue" height={100} width={100} /></div>

    }
    else if(news.length == 0)
    {
        return <div className={styles.notFound}>No Data !</div>
    }
    else {
        return (
            <>
                <div className={styles.newsContainer}>
                    {searchNews  ? searchNews.map((n) => {
                 
                        return <News key={n._id} news={n} />
                    }) : news.map((n) => {
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