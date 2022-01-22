import Head from 'next/head'

import News from '../components/News'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { useLanguage, useSearch } from '../providers/SearchContext';
import { Oval } from 'react-loader-spinner';
import { useFetch } from '../hooks/useFetch';



export async function getStaticProps() {

  
  const data = await useFetch("all" , null ,"en" , 1)

  return {
    props: {
      news: data
    },
    revalidate: 6000
  }
}




export default function Home({ news }) {
  const searchWord = useSearch();
  const choosenLanguage = useLanguage();
  const [search, setSearch] = useState('')
  const [searchNews, setSearchNews] = useState([])
  const [isLoaded , setIsLoaded] = useState(false)
  useEffect(() => {
      setIsLoaded(false)
      setSearch(searchWord)
  }, [searchWord])
  useEffect(async()=>{
    setIsLoaded(false)
    let data = null ;
    (search !='') ?   data =  await useFetch(search , null , choosenLanguage , 1) :  data =  await useFetch("all" , null , choosenLanguage , 1)
    setSearchNews(data)
    setIsLoaded(true)
  },[choosenLanguage])

  useEffect(async () => {
    setIsLoaded(false)
    let data = await useFetch(search , null , choosenLanguage , 1);
    setSearchNews(data)
    setIsLoaded(true)
  }, [search])

  const changePage =async (p)=>{
    let data = null ;
    (search !='') ? data = await useFetch(search , null , "en" , p) :   data = await useFetch("all" , null , "en" , p);
    setIsLoaded(true)
    
    setSearchNews(data)
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
