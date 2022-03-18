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
                
            </ul>

        </div>
    )
}

export default HeaderNav