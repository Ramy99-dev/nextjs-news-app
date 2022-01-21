import Head from 'next/head'

import News from '../components/News'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { useLanguage, useSearch } from '../providers/SearchContext';
import { Oval } from 'react-loader-spinner';
export async function getStaticProps() {

  const data = await fetch("https://api.newscatcherapi.com/v2/search?q=all&lang=en&page_size=8&page=1", {
    method: 'GET',
    headers: {
      "x-api-key": "XQ0OyzjNx98O-wH9uW2r5EsmmPXm0zS_NFHC8Pf4meI"
    }
  });
  const newsList = await data.json();

  return {
    props: {
      news: newsList.articles
    },
    revalidate: 6000
  }
}




export default function Home({ news }) {
  const searchWord = useSearch();
  const choosenLanguage = useLanguage();
  const [search, setSearch] = useState('')
  const [language,setLanguage] = useState('')
  const [searchNews, setSearchNews] = useState([])
  const [isLoaded , setIsLoaded] = useState(false)
  useEffect(() => {
    
      setSearch(searchWord)
    
    
  }, [searchWord])
  useEffect(async()=>{
    let data ;
    if(search !='')
    {
       data = await fetch(`https://api.newscatcherapi.com/v2/search?q=${search}&lang=en&page_size=8&page=1`, {
        method: 'GET',
        headers: {
          "x-api-key": "XQ0OyzjNx98O-wH9uW2r5EsmmPXm0zS_NFHC8Pf4meI"
        }
      });
    }
    else{
      data = await fetch(`https://api.newscatcherapi.com/v2/search?q=all&lang=${choosenLanguage}&page_size=8&page=1`, {
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
  },[choosenLanguage])

  useEffect(async () => {

    console.log(`https://api.newscatcherapi.com/v2/search?q=${search}&lang=fr`)
    
    const data = await fetch(`https://api.newscatcherapi.com/v2/search?q=${search}&lang=en&page_size=8&page=1`, {
      method: 'GET',
      headers: {
        "x-api-key": "XQ0OyzjNx98O-wH9uW2r5EsmmPXm0zS_NFHC8Pf4meI"
      }
    });

    const newsList = await data.json();


    let searchWord = [];
    newsList?.articles?.map((n) => {
      searchWord.push(n);

    })
    setIsLoaded(true)
    setSearchNews(searchWord)

  }, [search])

  const changePage =async (p)=>{
    let data ;
    if(search !='')
    {
       data = await fetch(`https://api.newscatcherapi.com/v2/search?q=${search}&lang=en&page_size=8&page=${p}`, {
        method: 'GET',
        headers: {
          "x-api-key": "XQ0OyzjNx98O-wH9uW2r5EsmmPXm0zS_NFHC8Pf4meI"
        }
      });
    }
    else{
      data = await fetch(`https://api.newscatcherapi.com/v2/search?q=all&lang=en&page_size=8&page=${p}`, {
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
  if(isLoaded==false)
  {
    return  <div className={styles.loader}><Oval color="blue" height={100} width={100} /></div>
  }
  else
  {
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
          {[1,2,3,4,5].map((nbr)=>{
           
            return <div onClick={()=>{ 
              setIsLoaded(false);
              changePage(nbr)}}>{nbr}</div>
          })}
        </div>
      </>
    )
  }
  
}
