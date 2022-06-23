import { useState } from "react"
import instagranLogo from "../public/assets/images/instaLogo.png"
import youtubeLogo from "../public/assets/images/youtubeLogo.png"
import spotifyLogo from "../public/assets/images/spotifyLogo.png"

const Contacto = ( props ) => {

    const [ email, setEmail ] = useState("email")
    const [ telefono, setTelefono ] = useState("telefono")

    return (
        <div data-component='Contacto' id='contacto' className='w-full flex py-10 sm:py-20 justify-center'>
            <div className='w-full lg:max-w-6xl px-5 xl:px-2 text-yellow'>
                <h2 className='text-3xl sm:text-5xl lg:text-7xl mb-16 font-cheddar text-white uppercase'>
                    DI HOL<span className="text-yellow">A</span>
                </h2>
                <div className="hidden sm:block text-[10rem] text-white font-cheddar text-center mb-10">
                    <a href="tel:123456789" className="mx-auto cursor-pointer block hover:text-yellow transition-colors duration-100 inline-block" 
                        onMouseEnter={() => setTelefono("123456789")} onMouseLeave={() => setTelefono("telefono")}>
                        {telefono}
                    </a>
                    <div>
                        <a href="mailto:hi@flinks.com" className="mx-auto cursor-pointer block hover:text-yellow transition-colors duration-100 inline-block" 
                            onMouseEnter={() => setEmail("hi@flinks.com")} onMouseLeave={() => setEmail("email")}>
                            {email}
                        </a>
                    </div>
                </div>
                <div className="sm:hidden text-white font-cheddar text-center mb-10 text-6xl">
                    <a href="tel:123456789" className="mx-auto">
                        1234566789
                    </a>
                    <div className="mt-10">
                        <a href="mailto:hi@flinks.com" className="mx-auto">
                            hi<span className="text-yellow">@</span>flinks.com
                        </a>
                    </div>
                </div>
                <div className="flex sm:hidden gap-4 justify-evenly">
                        <a href="https://www.instagram.com/flinksofficial/" className="transition duration-200 transform hover:scale-105">
                            <img src={instagranLogo.src} width="70" height="70"/>
                        </a>
                        <a href="https://open.spotify.com/artist/4oFz4w82DzzoT19TsPvA48" className="transition duration-200 transform hover:scale-105">
                            <img src={spotifyLogo.src} width="70" height="70"/>
                        </a>                        
                        <a href="https://www.youtube.com/channel/UCxbK88JmUvrDmGMzJ5yzRcQ" className="transition duration-200 transform hover:scale-105">
                            <img src={youtubeLogo.src} width="70" height="70"/>
                        </a>
                </div>
                <div className="hidden sm:flex gap-4 justify-evenly">
                        <a href="https://www.instagram.com/flinksofficial/" className="transition duration-200 transform hover:scale-105">
                            <img src={instagranLogo.src} width="150" height="150"/>
                        </a>
                        <a href="https://open.spotify.com/artist/4oFz4w82DzzoT19TsPvA48" className="transition duration-200 transform hover:scale-105">
                            <img src={spotifyLogo.src} width="150" height="150"/>
                        </a>                        
                        <a href="https://www.youtube.com/channel/UCxbK88JmUvrDmGMzJ5yzRcQ" className="transition duration-200 transform hover:scale-105">
                            <img src={youtubeLogo.src} width="150" height="150"/>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default Contacto