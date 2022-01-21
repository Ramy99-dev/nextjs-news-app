import Head from 'next/head'

import News from '../components/News'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react';
import { useSearch } from '../providers/SearchContext';
export async function getStaticProps() {

  const data = await fetch("https://api.newscatcherapi.com/v2/search?q=all&lang=en&page_size=8", {
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
  const [search, setSearch] = useState('')
  const [searchNews, setSearchNews] = useState([])
  useEffect(() => {
    setSearch(searchWord)



  }, [searchWord])

  useEffect(async () => {

    console.log(`https://api.newscatcherapi.com/v2/search?q=${search}&lang=fr`)

    const data = await fetch(`https://api.newscatcherapi.com/v2/search?q=${search}&lang=fr`, {
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
    setSearchNews(searchWord)

  }, [search])


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
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </div>
    </>
  )
}
