import Head from 'next/head';
import HeaderNav from '../components/HeaderNav'
import Intro from '../components/Intro'
import Conciertos from '../components/Conciertos';
import Galeria from '../components/Galeria';
import SobreNosotros from '../components/SobreNosotros';
import Contacto from '../components/Contacto';
import FullVideo from '../components/FullVideo';

export default function Home() {

  return (
    <div className="">
      <Head>
        <title>Flinks</title>
        <meta name="description" content="Flinks" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* <link rel="stylesheet" href='../../styles/slick.css'></link> */}
      </Head>

      <main className="">
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
          <p>by <a href="https://www.alexlucena.com/" target="_blank" className='hover:text-yellow'>Alex Lucena</a></p>
        </div>
      </footer>
    </div>
  )
}
