import Head from 'next/head'
import BrowseComp from '../components/Browse-categories/BrowseComp'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Porto-site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <BrowseComp />

  
      
    </div>
  )
}
