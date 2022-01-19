import Head from 'next/head'
import Image from 'next/image'
import News from '../components/News'
import styles from '../styles/Home.module.css'

export async function getStaticProps()
{

  const data = await fetch("https://api.newscatcherapi.com/v2/search?q=covid&lang=fr", {
    method: 'GET',
    headers: {
     "x-api-key":"XQ0OyzjNx98O-wH9uW2r5EsmmPXm0zS_NFHC8Pf4meI"
    }});
  const newsList =  await data.json();

  return {
    props:{
      news:newsList.articles
    }
  }
}


export default function Home({news}) {
  return (
    <div className={styles.newsContainer}>
        {console.log(news)}
        {news.map((n)=>{
          return <News news={n}/>
        })}
       
        

    </div>
  )
}
