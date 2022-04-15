import { useState } from 'react';

const Galeria = ( props ) => {

    const [showVideo, setShowVideo] = useState(false)

    return (
        <div data-component='FullVideo' className='w-full flex py-20 justify-center'>
            <div className='w-full lg:max-w-6xl px-5 xl:px-2'>

                <div className={`flex w-full justify-center cursor-pointer relative group rounded-lg hover:shadow-video-hover transition-all duration-300 bg-black bg-opacity-0 ${showVideo ? "shadow-video-hover" : " hover:bg-opacity-80 hover:shadow-video-hover"}`} onClick={()=>setShowVideo(true)}>
                    {!showVideo &&
                        <div className="absolute inset-1/2 h-20 w-20 rounded-full bg-white bg-opacity-30 transform -translate-x-2/4 -translate-y-2/4 group-hover:bg-opacity-80 transition-all duration-300 z-10 flex items-center justify-center shadow-md">
                            <div className="text-yellow text-3xl transform translate-x-0.5 translate-y-0.5">▶</div>
                        </div>
                    }
                    {showVideo 
                        ? 
                        <iframe className="w-full" height="630" src="https://www.youtube.com/embed/pwEe5Z2MSB0?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
                        :
                        // <div className="w-full aspect-w-16 aspect-h-9 bg-no-repeat bg-cover bg-center" style={style}></div>
                        <div className="text-white group-hover:bg-black/10 w-[1020px] h-[630px] font-cheddar text-[20rem] leading-none text-center"> 
                            <p className="text-yellow">AFUERA,</p>
                            <p>fLINK<span className="text-yellow">S</span></p>
                        </div>
                    }
                </div>
                
            </div>
        </div>
    )
}

export default Galeria