import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <body>
        <style>body {background-image: url('https://pbs.twimg.com/media/DsYI2P8WkAA4baz.jpg');}
        </style>
      </body>

      <main>
        <Header title="Welcome to my meowzeristic life changing App!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
