import Head from 'next/head'

import News from '../../components/News'
import styles from '../../styles/Search.module.css'
import { useEffect, useState } from 'react';
import { useLanguage } from '../../providers/SearchContext';
import { Oval } from 'react-loader-spinner';
import { Fetch } from '../../hooks/useFetch';



export async function getServerSideProps(context) {

  const {search}  =  context.params
  const data = await Fetch(search , null ,"en" , 1)

  return {
    props: {
      news: data,
      searchWord:search
    }
   
  }
}




export default function Search({ news , searchWord }) {
  const choosenLanguage = useLanguage();
  const [search, setSearch] = useState('')
  const [searchNews, setSearchNews] = useState([])
  const [isLoaded , setIsLoaded] = useState(true)
 
  useEffect(async()=>{
    
    setIsLoaded(false)
    let data = null ;
    data =  await Fetch(searchWord , null , choosenLanguage , 1) 
    setSearchNews(data)
    setIsLoaded(true)
  },[choosenLanguage])

  

  const changePage =async (p)=>{
    let data = null ;
    data = await Fetch(searchWord , null , "en" , p)
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
        

          {searchNews.length > 0 ? searchNews.map((n) => {
      
            return <News key={n.title} news={n} />
          }) : news.map((n) => {
            return <News key={n.title} news={n} />
          })}
  
        </div>
        <div className={styles.pagination}>
          {[1,2,3,4,5].map((nbr)=>{
           
            return <div key={nbr} onClick={()=>{ 
              setIsLoaded(false);
              changePage(nbr)}}>{nbr}</div>
          })}
        </div>
      </>
    )
  }
  
}
