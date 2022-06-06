import about_1 from "../public/assets/images/flinks-about-1.jpg"
import bass_photo from "../public/assets/images/bass-low.png"
import batera_photo from "../public/assets/images/batera-low.png"
import juli_photo from "../public/assets/images/juli-low.png"

const SobreNosotros = ( props ) => {

    const class_grayscale = "grayscale hover:grayscale-0 transition-all duration-300"

    return (
        <div data-component='SobreNosotros' id='sobre_nosotros' className='w-full flex py-20 justify-center'>
            <div className='w-full lg:max-w-6xl px-5 xl:px-2 text-white'>
                
                <h2 className='text-3xl sm:text-5xl lg:text-7xl mb-16 font-cheddar uppercase'>
                    Sobre Nosotro<span className="text-yellow">s</span>
                </h2>

                <div className="pb-10">
                    <p className="font-mono text-xl pb-10 text-center">
                        Flink<span className="text-yellow">s</span>  nació en el año 2019 para intentar hacerse un hueco en la escena de rock alternativo en Madrid. 
                        <br/>
                        3 personas muy diferentes que hacen algo muy diferente. Desde el grunge más rancio has el pop más engendrico del rock. Formada por el cantante y guitarra argentino Julian vallmitjana. 
                        Influenciado por bandas como <span className="text-bold">Nirvana</span>, BUSH o el pop de los BEATLES Y el punk de RANCID hasta por géneros como el SKA y el Indi.
                        <br/>
                        <br/>
                        Presentan su primer disco a finales de 2021,”AFUERA” , por diferentes lugares   de ESPAÑA, especialmente en VALENCIA, BARCELONA Y MADRID.
                        En 2022 empiezan la grabación del que será su 2 álbum.
                        Lo diferente de Flinks, es que no se puede colocar en ningún género.
                        Algunos dicen que es ROCK, otros que es POP, pero no deja indiferente a nadie, con sus potentes directos.
                        Efectos y ruidos raros están a la orden en sus conciertos.
                        <br/>
                        <br/>
                        MUSICA DE LA CALLE PARA GENTE DE LA CALLE
                    </p>
                    <div>
                        <img src={about_1.src} width="" height="" className={class_grayscale}/>
                    </div>
                </div>

                <div className="flex pb-16 items-center gap-10">
                    <img src={bass_photo.src} width="250" height="250" className={`flex-none ${class_grayscale}`}/>
                    <div>
                        <h3 className="text-4xl text-yellow font-cheddar mb-4">Axel</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur non sem ac tincidunt. Sed urna odio, hendrerit vitae placerat non, hendrerit semper mauris. Vivamus quis suscipit velit, id cursus est. Ut dignissim lacinia dolor at molestie. Praesent commodo diam a quam eleifend venenatis. Suspendisse lacinia sapien vitae justo elementum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu molestie felis, non bibendum purus. Phasellus nec lorem augue. Ut auctor consequat venenatis. Nulla molestie.
                        </p>
                    </div>
                </div>
                <div className="flex pb-16 items-center gap-10">
                    <div>
                        <h3 className="text-4xl text-yellow font-cheddar mb-4">Carlos Gonz'alez</h3>
                        <p>
                            Tocando la batería desde los 17 años, cuando empecé a tocar con unos compañeros en un
                            grupo de rock español, autodidacta durante varios años, entre a formar parte de varias bandas
                            con distintos estilos, desde el rock hasta el heavy metal mas clásico pasando por el Nu metal y
                            el punk, tras un parón musical a los 25 años, deje de tocar la batería por un tiempo para
                            dedicarme a cantar en un par de grupos de Nu metal aunque finalmente regrese a lo que era lo
                            que realmente me gustaba, la batería.
                            Hace 4 años entre a formar parte de la banda de rock- grunge moderno Flinks y comencé con
                            clases de batería para mejorar la técnica y poder aportar a la banda la mejor versión musical
                            posible.
                            Actualmente seguimos en la música habiendo sacado nuestro primer disco y disfrutando de lo
                            que mas nos gusta, ahora solo toca seguir mejorando tanto individualmente como en grupo
                            para que nuestra música llegue a formar parte de algo importante.
                        </p>
                    </div>
                    <img src={batera_photo.src} width="250" height="250" className={`justify-self-end flex-none ${class_grayscale}`}/>
                </div>
                <div className="flex pb-10 items-center gap-10">
                    <img src={juli_photo.src} width="250" height="250" className={`flex-none ${class_grayscale}`}/>
                    <div>
                        <h3 className="text-4xl text-yellow font-cheddar mb-4"> Juli'an Vallmitjana</h3>
                        <p>
                            Cantante, bajista, guitarrista y productos argentino.
                            Lleva la música desde pequeño en la sangre, su primer banda(Aneurisma) la formo con la edad
                            de 13 años con el batería JUAN PABLO SOLIS Y el guitarra y cantante JAVIER POLESCHI,
                            haciendo Covers de NIRVANA.
                            Afincado en Madrid desde el año 2002, esta es su 5 banda. Comenzando por el genero punk en
                            bandas como ULTIMO RECURSO o en el genero alternativo como cantante de CUBO Y
                            CALCOMANIAS.
                            Después de pasearse por el teatro musical con la gran “BANDA MOCOSA”, decide formar
                            FLINKS, para dar forma a algunos temas compuestos.
                            EM 2018 Se graban 2 temas en SAE ESTUDIOS, MADRID, allí conoce a Edu MORENO, productos
                            de FIX estudios Y LE AYUDA A DAR FORMA AL PROYECTO.
                            EN 2019 JUNTO A AXEL BAJAÑA Y CARLOS GONZALES, forman FLINKS, intentado calar en la
                            escena del rock español
                        </p>
                    </div>

                </div>
                
            </div>
        </div>
    )
}

export default SobreNosotros