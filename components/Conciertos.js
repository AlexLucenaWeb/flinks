import conciertos from "../data/conciertos-info"
import Tickets from "../components/icons/tickets"

const Conciertos = ( props ) => {

    return (
        <div data-component='Cociertos' id='conciertos' className='w-full flex pt-10 sm:pt-20 sm:pb-20 justify-center'>
            <div className='lg:max-w-6xl px-5 xl:px-2 text-yellow'>
                <h2 className='text-3xl sm:text-5xl lg:text-7xl mb-16 font-cheddar text-white uppercase'>
                    Concierto<span className="text-yellow">s</span>
                </h2>
                
                <div>
                    {conciertos.map((concierto, index) => (
                       <div key={index} className="mb-14 sm:mb-6 font-cheddar flex justify-between transition-all duration-300 sm:hover:shadow-image-hover sm:p-4 rounded-md group overflow-hidden cursor-pointer">
                          
                            <div className="flex gap-5 sm:gap-10 md:gap-20 lg:gap-32 xl:gap-48 pr-8">
                                <div className=''>

                                    <div className="flex items-end gap-2 sm:gap-4">

                                        <p className="text-xl sm:text-5xl md:text-7xl font-semibold text-yellow sm:text-white">{concierto.dia}</p>
                                        <div className="text-xl md:text-3xl flex gap-2 sm:block">
                                            <p>{concierto.mes}</p>
                                            <p>{concierto.ano}</p>
                                        </div>
                                    </div>

                                    <p className="text-3xl sm:text-5xl md:text-7xl font-semibold text-white sm:hidden">{concierto.ciudad}</p>
                                </div>

                                <div className='items-end gap-4 hidden sm:flex'>

                                    <p className="text-3xl sm:text-5xl md:text-7xl font-semibold text-white">{concierto.ciudad}</p>
                                    <div className="text-xl md:text-3xl text-yellow ">
                                        <p>{concierto.lugar}</p>
                                        <p>{concierto.sala}</p>
                                    </div>

                                </div>

                                <div className="text-xl md:text-3xl text-yellow sm:hidden justify-end flex flex-col">
                                    <p>{concierto.lugar}</p>
                                    <p className="text-3xl text-white">{concierto.sala}</p>
                                </div>
                            </div>


                            {concierto.entradas_link &&
                                <div className="flex justify-end items-end md:items-center pb-1 justify-self-end ">
                                    
                                    <div className="h-full flex items-center">
                                        <p className="hidden sm:block sm:group-hover:text-white text-transparent transition-all duration-300 pr-8 text-lg md:text-xl ">Entradas →</p>
                                    </div>
                                    <a href={concierto.entradas_link} className="w-max" target="_blank">
                                        <Tickets classes="w-10 md:w-16 h-10 md:h-16 fill-current text-yellow hover:text-white transition-colors duration-300"/>
                                    </a>
                                </div>
                            }

                       </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Conciertos