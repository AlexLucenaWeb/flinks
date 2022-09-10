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
import apleicon57 from '../public/assets/images/icons/apple-icon-57x57.png'
import apleicon60 from '../public/assets/images/icons/apple-icon-60x60.png'
import apleicon72 from '../public/assets/images/icons/apple-icon-72x72.png'
import apleicon76 from '../public/assets/images/icons/apple-icon-76x76.png'
import apleicon114 from '../public/assets/images/icons/apple-icon-114x114.png'
import apleicon120 from '../public/assets/images/icons/apple-icon-120x120.png'
import apleicon144 from '../public/assets/images/icons/apple-icon-144x144.png'
import apleicon152 from '../public/assets/images/icons/apple-icon-152x152.png'
import apleicon180 from '../public/assets/images/icons/apple-icon-180x180.png'

export default function Home() {

  useEffect(()=>{
    const cookie = readCookie('julilu')
  },[])

  return (
    <div className="">
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
        <link rel="apple-touch-icon" sizes="57x57" href={apleicon57}></link>
        <link rel="apple-touch-icon" sizes="60x60" href={apleicon60}></link>
        <link rel="apple-touch-icon" sizes="72x72" href={apleicon72}></link>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"></link>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"></link>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"></link>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"></link>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"></link>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"></link>
      </Head>

      <main>
        <HeaderNav/>
        <Intro/>
        {/* <Conciertos/> */}
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
