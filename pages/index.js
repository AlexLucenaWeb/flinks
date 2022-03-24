import Head from 'next/head';
import HeaderNav from '../components/HeaderNav'
import Intro from '../components/Intro'
import Conciertos from '../components/Conciertos';
import Galeria from '../components/Galeria';
import SobreNosotros from '../components/SobreNosotros';
import Contacto from '../components/Contacto';

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
        <Galeria/>
        <SobreNosotros/>
        <Contacto/>
      </main>

      <footer className="">

      </footer>
    </div>
  )
}
