import GallerySlider from './slider/slider'

const Galeria = ( props ) => {

    const closeImageHandler = () => {
        document.getElementById('full_image').classList.add('hidden')
        document.body.classList.remove('lock-position')
    }

    return (
        <div data-component='Galeria' id='galeria' className='w-full flex py-10 sm:py-20 justify-center bg-blue'>
            <div id="full_image" onClick={closeImageHandler} className='w-screen h-screen bg-black bg-opacity-70 fixed top-0 right-0 overflow-auto flex items-center justify-center z-50 hidden'>
            </div>
            <div className='w-full lg:max-w-6xl px-5 xl:px-2'>
                <h2 className='text-3xl sm:text-5xl lg:text-7xl mb-4 sm:mb-16 font-cheddar text-white uppercase'>
                    Galeri<span className="text-yellow">a</span>
                </h2>
                <GallerySlider/>
                <p className='sm:hidden text-white font-cheddar text-center'>
                    ←  Desliza  →
                </p>
            </div>
        </div>
    )
}

export default Galeria