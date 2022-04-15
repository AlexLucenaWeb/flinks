import about_1 from "../public/assets/images/flinks-about-1.jpg"

const SobreNosotros = ( props ) => {

    return (
        <div data-component='SobreNosotros' id='sobre_nosotros' className='w-full flex py-20 justify-center'>
            <div className='w-full lg:max-w-6xl px-5 xl:px-2'>
                <h2 className='text-3xl sm:text-5xl lg:text-7xl mb-16 font-cheddar text-white uppercase'>
                    Sobre Nosotro<span className="text-yellow">s</span>
                </h2>
                <div>
                    <p className="text-white font-mono text-xl pb-10">
                        Flink<span className="text-yellow">s</span> nació en el año 2019 para intentar hacerse un hueco en la escena de rock alternativo en Madrid. 
                        3 personas muy diferentes que hacen algo muy diferente, desde el grunge más rancio hasta el pop más engendrico del rock.
                    </p>
                    <div>
                        <img src={about_1.src} width="" height="" className="grayscale hover:grayscale-0 transition-all duration-300"/>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default SobreNosotros