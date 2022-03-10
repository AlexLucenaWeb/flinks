import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/header'
import Intro from '../components/Intro'
import Conciertos from '../components/Conciertos';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Intro/>
        <Conciertos/>
      </main>

      <footer className="">

      </footer>
    </div>
  )
}
