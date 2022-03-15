import useRefLinkHandler from '../lib/use-ref-handler'

const HeaderNav = ( props ) => {

    const links = [
        {title: "Conciertos", link: "conciertos" },
        {title: "Galeria", link: "galeria" },
        {title: "Sobre Flinks", link: "sobre_nosotros" },
        {title: "Contacto", link: "contacto" },
    ]

    return (
        <div data-component="HeaderNav" className="w-full py-5 text-right">
            <ul className='fixed top-0 right-10 z-50 flex gap-5 py-4 text-yellow'>
                {links.map((link, index) =>(
                    <li key={index} onClick={() => useRefLinkHandler(link.link)} className="hover:cursor-pointer">
                        {link.title}
                    </li>
                ))}
{/* 
                <li onClick={() => useRefLinkHandler('galeria')} className="hover:cursor-pointer">
                    Galeria
                </li>
                <li onClick={() => useRefLinkHandler('sobre_nosotros')} className="hover:cursor-pointer">
                    Sobre Flinks
                </li>
                <li onClick={() => useRefLinkHandler('contacto')} className="hover:cursor-pointer">
                    Contac  to
                </li> */}

            </ul>

        </div>
    )
}

export default HeaderNav