import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Starborne Calc</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar styles={styles}/>
      <main className={styles.main}>

      </main>

    </div>
  )
}
