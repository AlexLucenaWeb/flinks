import { useState } from 'react/cjs/react.production.min'
import useRefLinkHandler from '../lib/use-ref-handler'
import logo from '../public/assets/images/logo_color.jpg'

const HeaderNav = ( props ) => {


    const links = [
        {title: "Conciertos", link: "conciertos" },
        {title: "Galeria", link: "galeria" },
        {title: "Sobre Flinks", link: "sobre_nosotros" },
        {title: "Contacto", link: "contacto" },
    ]


    return (
        <div data-component="HeaderNav" className="fixed top-0 z-50 flex justify-between w-full py-5 px-20">
            <img src={logo.src} width="100"/>
            <ul className='flex gap-6 py-4 text-yellow text-2xl font-cheddar'>
                {links.map((link, index) =>(
                    <li key={index} onClick={() => useRefLinkHandler(link.link)} className="hover:cursor-pointer hover:text-white transition-colors duration-100">
                        {link.title}
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default HeaderNav