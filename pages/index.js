import Head from 'next/head';
import Image from 'next/image';
import HeaderNav from '../components/HeaderNav'
import Intro from '../components/Intro'
import Conciertos from '../components/Conciertos';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Flinks</title>
        <meta name="description" content="Flinks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <HeaderNav/>
        <Intro/>
        <Conciertos/>
      </main>

      <footer className="">

      </footer>
    </div>
  )
}
