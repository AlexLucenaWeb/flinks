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
                    <p className="font-mono text-xl pb-10">
                        Flink<span className="text-yellow">s</span> nació en el año 2019 para intentar hacerse un hueco en la escena de rock alternativo en Madrid. 
                        3 personas muy diferentes que hacen algo muy diferente, desde el grunge más rancio hasta el pop más engendrico del rock.
                    </p>
                    <div>
                        <img src={about_1.src} width="" height="" className={class_grayscale}/>
                    </div>
                </div>

                <div className="flex pb-10 items-center gap-10">
                    <img src={bass_photo.src} width="250" height="250" className={`flex-none ${class_grayscale}`}/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur non sem ac tincidunt. Sed urna odio, hendrerit vitae placerat non, hendrerit semper mauris. Vivamus quis suscipit velit, id cursus est. Ut dignissim lacinia dolor at molestie. Praesent commodo diam a quam eleifend venenatis. Suspendisse lacinia sapien vitae justo elementum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu molestie felis, non bibendum purus. Phasellus nec lorem augue. Ut auctor consequat venenatis. Nulla molestie.
                    </p>
                </div>
                <div className="grid grid-cols-2 pb-10 items-center">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur non sem ac tincidunt. Sed urna odio, hendrerit vitae placerat non, hendrerit semper mauris. Vivamus quis suscipit velit, id cursus est. Ut dignissim lacinia dolor at molestie. Praesent commodo diam a quam eleifend venenatis. Suspendisse lacinia sapien vitae justo elementum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu molestie felis, non bibendum purus. Phasellus nec lorem augue. Ut auctor consequat venenatis. Nulla molestie.
                    </p>
                    <img src={batera_photo.src} width="250" height="250" className={`justify-self-end ${class_grayscale}`}/>
                </div>
                <div className="grid grid-cols-2 pb-10 items-center">
                    <img src={juli_photo.src} width="250" height="250" className={class_grayscale}/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur non sem ac tincidunt. Sed urna odio, hendrerit vitae placerat non, hendrerit semper mauris. Vivamus quis suscipit velit, id cursus est. Ut dignissim lacinia dolor at molestie. Praesent commodo diam a quam eleifend venenatis. Suspendisse lacinia sapien vitae justo elementum dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu molestie felis, non bibendum purus. Phasellus nec lorem augue. Ut auctor consequat venenatis. Nulla molestie.
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default SobreNosotros