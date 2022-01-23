import Layout from '../components/layout'
import '../styles/globals.css'
import React from 'react'
import { UserProvider } from '@auth0/nextjs-auth0';


function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </UserProvider>
  )
}

export default MyApp
