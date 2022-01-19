import Layout from '../components/layout'
import '../styles/globals.css'
import React from 'react'
import { SearchProvider } from '../providers/SearchContext'

function MyApp({ Component, pageProps }) {
  return (
   
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default MyApp
