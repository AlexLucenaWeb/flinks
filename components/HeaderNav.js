import useRefLinkHandler from '../lib/use-ref-handler'

const HeaderNav = ( props ) => {



    return (
        <div data-component="HeaderNav" className="w-full py-5 text-right">
            <ul className='flex text-yellow gap-4'>
                <li onClick={() => useRefLinkHandler('conciertos')} className="hover:cursor-pointer">
                    Conciertos
                </li>
                <li onClick={() => useRefLinkHandler('conciertos')} className="hover:cursor-pointer">
                    Galeria
                </li>
                <li onClick={() => useRefLinkHandler('conciertos')} className="hover:cursor-pointer">
                    Sobre Flinks
                </li>
                <li onClick={() => useRefLinkHandler('conciertos')} className="hover:cursor-pointer">
                    Contacto
                </li>

            </ul>

        </div>
    )
}

export default HeaderNav