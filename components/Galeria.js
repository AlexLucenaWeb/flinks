import GallerySlider from './slider/slider'

const Galeria = ( props ) => {

    return (
        <div data-component='Galeria' id='galeria' className='w-full flex py-20 justify-center'>
            <div className='w-full lg:max-w-6xl px-5 xl:px-2'>
                <h2 className='text-3xl sm:text-5xl lg:text-7xl mb-16 font-cheddar text-white uppercase'>
                    Galeri<span className="text-yellow">a</span>
                </h2>
                <div className="">
                    <GallerySlider/>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Galeria