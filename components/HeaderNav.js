import { useState, useEffect } from 'react'
import useRefLinkHandler from '../lib/use-ref-handler'
import logo from '../public/assets/images/logo_color.jpg'
import BurgerIcon from './icons/burger'

const HeaderNav = ( props ) => {

    const links = [
        {title: "Conciertos", link: "conciertos" },
        {title: "Sobre Flinks", link: "sobre_nosotros" },
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
    },[])


    return (
        <div data-component="HeaderNav" className={`fixed top-0 z-50 w-full pb-4 ${navBgColor}`}>
            <nav className='max-w-7xl mx-auto flex justify-between w-full py-2 px-4'>

                {/* Links logo */}
                <img src={logo.src} width="79,4" height="53,2" className={`transition-opacity duration-700 ${logoOpacity}`}/>
                
                {/* Menu */}
                <ul className='hidden sm:flex gap-6 py-4 text-yellow text-2xl font-cheddar'>
                    {links.map((link, index) =>(
                        <li key={index} onClick={() => useRefLinkHandler(link.link)} className="hover:cursor-pointer hover:text-white transition-colors duration-100">
                            {link.title}
                        </li>
                    ))}
                </ul>
                <div className='sm:hidden mt-1'>
                    <BurgerIcon />
                </div>
            </nav>
        </div>
    )
}

export default HeaderNav