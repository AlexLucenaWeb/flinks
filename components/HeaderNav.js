import { useState, useEffect } from 'react'
import { refLinkHandler } from '../lib/utils'
import logo from '../public/assets/images/logo_color.jpg'
import BurgerIcon from './icons/burger'
import CloseX from './icons/close_x'

const HeaderNav = ( props ) => {

    const [ showMenu, setShowMenu ] = useState(false)
    const [opacity, setOpacity ] = useState('opacity-0')

    const links = [
        {title: "Conciertos", link: "conciertos" },
        {title: "Sobre Nosotros", link: "sobre_nosotros" },
        {title: "Galeria", link: "galeria" },
        {title: "Contacto", link: "contacto" },
    ];

    const [ logoOpacity, setLogoOpacity ] = useState('opacity-0')
    const [ navBgColor, setNavBgColor ] = useState("")

    const showLogo = () => {
        if (window.scrollY >= 10 ){
            setLogoOpacity('opacity-100')
            setNavBgColor("nav-bg")

        } else {
            setLogoOpacity('opacity-0')
            setNavBgColor("")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', showLogo)
        setTimeout(() => {
            setOpacity('opacity-100')
        }, 1800);
    },[])


    return (
        <div data-component="HeaderNav" className={`fixed top-0 z-40 w-full pb-4 tarnsition-all duration-500 ${navBgColor} ${opacity}`}>
            <nav className='max-w-7xl mx-auto flex justify-between w-full py-2 px-4'>

                {/* Links logo */}
                <img src={logo.src} width="79,4" height="53,2" className={`transition-opacity duration-700 ${logoOpacity}`}/>
                
                {/* Menu */}
                <ul className='hidden sm:flex gap-6 py-4 text-yellow text-2xl font-cheddar'>
                    {links.map((link, index) =>(
                        <li key={index} onClick={() => refLinkHandler(link.link)} className="hover:cursor-pointer hover:text-white transition-colors duration-100">
                            {link.title}
                        </li>
                    ))}
                </ul>
                <div className='sm:hidden mt-1' onClick={()=>setShowMenu(true)}>
                    <BurgerIcon />
                </div>
            </nav>

            {/* phone menu */}
            <div className={showMenu ? "visible" : "invisible"}>
                <div className={`fixed inset-0`}>
                    <div onClick={()=>setShowMenu(false)} className={`bg-black w-full h-full transition-all duration-300 ${showMenu ? "bg-opacity-75" : "bg-opacity-0"}`}>
                    </div>
                    <div className={`absolute top-0 inset-x-0 flex justify-between px-6 shadow-xl transition-all duration-300 pt-5 pb-10 nav-bg ${showMenu ? "" : "-translate-y-full"}`}>
                        <ul className='py-4 text-yellow text-2xl font-cheddar w-max' onClick={()=>setShowMenu(false)}>
                            {links.map((link, index) =>(
                                <li key={index} onClick={() => refLinkHandler(link.link)} className="mb-4">
                                    {link.title}
                                </li>
                            ))}
                        </ul>
                        <div onClick={()=>setShowMenu(false)} className='rounded-full h-8 w-8 bg-white/30 text-black mt-4 flex items-center justify-center font-cheddar'>
                            <CloseX/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderNav