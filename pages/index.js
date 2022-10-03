import Head from 'next/head';
import HeaderNav from '../components/HeaderNav'
import Intro from '../components/Intro'
import Conciertos from '../components/Conciertos';
import Galeria from '../components/Galeria';
import SobreNosotros from '../components/SobreNosotros';
import Contacto from '../components/Contacto';
import FullVideo from '../components/FullVideo';
import { readCookie } from '../lib/utils';
import { useEffect } from 'react';

import favicon96 from '../public/assets/images/icons/favicon-96x96.png'
import favicon32 from '../public/assets/images/icons/favicon-32x32.png'
import favicon16 from '../public/assets/images/icons/favicon-16x16.png'

export default function Home() {

  useEffect(()=>{
    const cookie = readCookie('julilu')
  },[])

  console.log(favicon32.src)

  return (
    <div>
      <Head>
        <title>Flinks</title>
        <meta name="Flinks music band" content="Flinks" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* <link rel="stylesheet" href='../../styles/slick.css'></link> */}
        <link rel="icon" type="image/png" sizes="32x32" href={favicon16.src}></link>
        <link rel="icon" type="image/png" sizes="96x96" href={favicon32.src}></link>
        <link rel="icon" type="image/png" sizes="16x16" href={favicon96.src}></link>
      </Head>

      <main>
        <HeaderNav/>
        <Intro/>
        <Conciertos/>
        <FullVideo/>
        <SobreNosotros/>
        <Galeria/>
        <Contacto/>
      </main>

      <footer className="pb-4 pt-6 footer-bg text-white font-cheddar">
        <div className='max-w-7xl mx-auto px-4 flex justify-between'>
          <p>© Flink<span className='text-yellow pr-1'>s</span> 2022</p>
          <p>by <a href="https://www.alexlucena.com/" target="_blank" rel="noreferrer"className='hover:text-yellow'>Alex Lucena</a></p>
        </div>
      </footer>
    </div>
  )
}
