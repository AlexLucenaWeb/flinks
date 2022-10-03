import about_1 from "../public/assets/images/flinks-about-1.jpg"
import bass_photo from "../public/assets/images/bass-low.png"
import batera_photo from "../public/assets/images/batera-low.png"
import juli_photo from "../public/assets/images/juli-low.png"

// import dosierFlinks from "../public/Dossier-flinks.pdf"

const SobreNosotros = ( props ) => {

    const downloadDosierHandler = () => {
        // using Java Script method to get PDF file
        fetch('Dossier-flinks.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Dossier-flinks.pdf';
                alink.click();
            })
        })
    }

    const class_grayscale = "grayscale hover:grayscale-0 transition-all duration-300"

    return (
        <div data-component='SobreNosotros' id='sobre_nosotros' className='w-full flex py-10 sm:py-20 justify-center'>
            <div className='w-full lg:max-w-6xl px-5 xl:px-2 text-white'>
                
                <h2 className='text-3xl sm:text-5xl lg:text-7xl mb-16 font-cheddar uppercase'>
                    Sobre Nosotro<span className="text-yellow">s</span>
                </h2>

                <div className="pb-10 font-mono sm:text-xl sm:text-center">
                    <p className="pb-4">
                        <span className="font-bold">Flink<span className="text-yellow">s</span></span>  nació en el año 2019 para intentar hacerse un hueco en la escena de rock alternativo en Madrid. 
                        <br/>
                        3 personas muy diferentes que hacen algo muy diferente. Desde el grunge más rancio has el pop más engendrico del rock. Formada por el cantante y guitarra argentino Julian vallmitjana. 
                        Influenciado por bandas como <span className="text-bold">Nirvana</span>, Bush o el pop de los Beatles Y el punk de Rancid hasta por géneros como el Ska y el Indie.
                    </p>
                    <div className="sm:hidden my-4">
                        <img src={about_1.src} width="" height="" className={class_grayscale}/>
                    </div>
                    <p className="font-roboto pb-10">
                        Presentan su primer disco a finales de 2021, <span className="font-bold">"Afuera"</span>, por diferentes lugares de España, especialmente en Valencia, Barcelona Y Madrid.
                        En 2022 empiezan la grabación del que será su srgundo álbum.
                        Lo diferente de Flinks, es que no se puede colocar en ningún género.
                        Algunos dicen que es Rock, otros que es Pop, pero no deja indiferente a nadie, con sus potentes directos.
                        Efectos y ruidos raros están a la orden en sus conciertos.
                        <br/>
                        <br/>
                        <span className="font-bold">Música de la calle para gente de la calle.</span>
                    </p>
                    <div className="hidden sm:block">
                        <img src={about_1.src} width="" height="" className={class_grayscale}/>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row pb-16 items-center gap-10">
                    <img src={bass_photo.src} width="250" height="250" className={`flex-none ${class_grayscale}`}/>
                    <div className="order-first sm:order-last">
                        <h3 className="text-4xl text-yellow font-cheddar mb-4">Axel</h3>
                        <p>
                            Bajista y batería ecuatoriano.
                            <br/>   
                            Desde una temprana edad tuvo inquietud por la música, empezando a los 14 coma bajista en el grupo Falling Loud en Burgos (España).
                            Por su amor en la cultura hizo que su profesión estuviera orientada a ella trabajando en producción de conciertos.
                            Viendo en la actualidad en Madrid desde el 2016, estuvo en diversos grupos hasta que conoció a Julian en 2019 formando FLINKS, junto a Carlos que cerró la formación convirtiendo el grupo en un Power trío.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row pb-16 items-center gap-10">
                    <div>
                        <h3 className="text-4xl text-yellow font-cheddar mb-4">Carlos González</h3>
                        <p>
                            Batería desde los 17 años.
                            <br/>
                            Autodidacta durante varios años, entró a formar parte de varias bandas
                            con distintos estilos, desde el rock hasta el heavy metal más clásico pasando por el Nu metal y
                            el punk, tras un parón musical a los 25 años, cuando dejó de tocar la batería por un tiempo para
                            dedicarse a cantar en un par de grupos de Nu metal, para finalmente, regresar a lo que más gustaba, la batería.
                            Hace 4 años entre a formar parte de la banda de rock-grunge moderno <span className="font-bold">Flink<span className="text-yellow">s</span></span> y comenzó con
                            clases de batería para mejorar la técnica y poder aportar a la banda la mejor versión musical
                            posible.
                            <br/>
                            Actualmente sigue en la música habiendo sacado nuestro primer disco y disfrutando de lo
                            que mas nos gusta, ahora solo toca seguir mejorando tanto individualmente como en grupo
                            para que nuestra música llegue a formar parte de algo importante.
                        </p>
                    </div>
                    <img src={batera_photo.src} width="250" height="250" className={`justify-self-end flex-none ${class_grayscale}`}/>
                </div>
                <div className="flex flex-col sm:flex-row pb-10 items-center gap-10">
                    <img src={juli_photo.src} width="250" height="250" className={`flex-none ${class_grayscale}`}/>
                    <div className="order-first sm:order-last">
                        <h3 className="text-4xl text-yellow font-cheddar mb-4"> Julián Vallmitjana</h3>
                        <p>
                            Cantante, bajista, guitarrista y productos argentino.
                            Lleva la música desde pequeño en la sangre, su primer banda(Aneurisma) la formo con la edad
                            de 13 años con el batería Juan Pablo Solis Y el guitarra y cantante Javier Poleschi,
                            haciendo covers de Nirvana.
                            Afincado en Madrid desde el año 2002, esta es su quinta banda. Comenzando por el genero punk en
                            bandas como Ultimo Recurso o en el genero alternativo como cantante de Cubo Y
                            Calcomanias.
                            <br/>
                            Después de pasearse por el teatro musical con la gran "Banda Mocosa", decide formar 
                            <span className="font-bold"> Flink<span className="text-yellow">s</span></span>, para dar forma a algunos temas compuestos.
                            n 2018 Se graban 2 temas en SAE Estudios, Madrid, allí conoce a Edu Moreno, productos
                            de Fix estudios y le ayuda a dar forma al proyecto.
                            En 2019 Junto a Axel Bajaña y Carlos Gonzales, forman Flink<span className="text-yellow">s</span>, intentado calar en la
                            escena del rock español
                        </p>
                    </div>

                </div>


                <div className="pt-5 flex justify-center">
                    <button onClick={downloadDosierHandler} className="text-3xl sm:text-5xl text-white font-cheddar justify-between transition-all duration-300 shadow-video sm:hover:shadow-video-hover p-2 sm:p-4 rounded-md group overflow-hidden cursor-pointer">
                        Descárgate Nuestro Dosie<span className="text-yellow">r</span>
                    </button>
                </div>
                            
            </div>
        </div>
    )
}

export default SobreNosotros