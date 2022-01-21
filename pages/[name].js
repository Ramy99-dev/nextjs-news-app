import { useState } from 'react';
import News from '../components/News';
import styles from '../styles/Home.module.css'
import { Oval } from 'react-loader-spinner';
const TOPICS = ["covid", "science", "tech", "sport", "astronomy", "nature"]


export async function getStaticProps(context) {
    const topic = context.params.name;
    let data;
    if (topic == TOPICS[1] || topic == TOPICS[3] || topic == TOPICS[2]) {
        data = await fetch(`https://api.newscatcherapi.com/v2/search?q=all&lang=en&page_size=8&page=1&topic=${topic}`, {
            method: 'GET',
            headers: {
                "x-api-key": "XQ0OyzjNx98O-wH9uW2r5EsmmPXm0zS_NFHC8Pf4meI"
            }
        });
    }
    else {
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
            news: newsList.articles,
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

    const [isLoaded, setIsLoaded] = useState(true);
    const [searchNews, setSearchNews] = useState([]);
    const changePage = async (p) => {

        let data;
        console.log("TOPIC")
        console.log(topic)
        if (topic == TOPICS[1] || topic == TOPICS[3] || topic == TOPICS[2]) {
            data = await fetch(`https://api.newscatcherapi.com/v2/search?q=all&lang=en&page_size=8&page=${p}&topic=${topic}`, {
                method: 'GET',
                headers: {
                    "x-api-key": "XQ0OyzjNx98O-wH9uW2r5EsmmPXm0zS_NFHC8Pf4meI"
                }
            });
        }
        else {
            data = await fetch(`https://api.newscatcherapi.com/v2/search?q=${topic}&lang=en&page_size=8&page=${p}`, {
                method: 'GET',
                headers: {
                    "x-api-key": "XQ0OyzjNx98O-wH9uW2r5EsmmPXm0zS_NFHC8Pf4meI"
                }
            });
        }

        const newsList = await data.json();

        let searchWord = [];
        newsList?.articles?.map((n) => {
            searchWord.push(n);

        })
        setIsLoaded(true)
        setSearchNews(searchWord)
    }

    if (isLoaded == false) {
        return <div className={styles.loader}><Oval color="blue" height={100} width={100} /></div>

    }
    else {
        return (
            <>
                <div className={styles.newsContainer}>
                    {console.log(news)}
                    {searchNews.length > 0 ? searchNews.map((n) => {
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