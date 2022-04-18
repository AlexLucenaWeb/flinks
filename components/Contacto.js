import { useState } from "react"

const Contacto = ( props ) => {

    const [ email, setEmail ] = useState("email")
    const [ telefono, setTelefono ] = useState("telefono")

    return (
        <div data-component='Contacto' id='contacto' className='w-full flex py-20 justify-center'>
            <div className='w-full lg:max-w-6xl px-5 xl:px-2 text-yellow'>
                <h2 className='text-3xl sm:text-5xl lg:text-7xl mb-16 font-cheddar text-white uppercase'>
                    Contact<span className="text-yellow">o</span>
                </h2>
                <div className="text-[10rem] text-white font-cheddar">
                    <a href="mailto:hi@flinks.com" className="mx-auto cursor-pointer block" 
                        onMouseEnter={() => setEmail("hi@flinks.com")} onMouseLeave={() => setEmail("email")}>
                        {email}
                    </a>
                    <a href="tel:123456789" className="mx-auto cursor-pointer block" 
                        onMouseEnter={() => setTelefono("123456789")} onMouseLeave={() => setTelefono("telefono")}>
                        {telefono}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contacto