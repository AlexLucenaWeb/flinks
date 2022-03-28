import conciertos from "../data/conciertos-info"

const Conciertos = ( props ) => {

    return (
        <div data-component='Cociertos' id='conciertos' className='w-full flex py-20 justify-center'>
            <div className='w-full lg:max-w-6xl px-5 xl:px-2 text-yellow'>
                <h2 className='text-3xl sm:text-5xl lg:text-7xl mb-16 font-cheddar text-white uppercase'>
                    Concierto<span className="text-yellow">s</span>
                </h2>
                
                <div className='w-full'>
                    {conciertos.map((concierto, index) => (
                        <div key={index} className='flex justify-between mb-10 font-cheddar'>
                            
                            <div className='flex items-center gap-4'>
                                <p className="text-7xl font-semibold text-white">{concierto.dia}</p>
                                <div className="text-3xl">
                                    <p>{concierto.mes}</p>
                                    <p>{concierto.ano}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <p className="text-7xl font-semibold text-white">{concierto.ciudad}</p>
                                <div className="text-3xl">
                                    <p>SALA</p>
                                    <p>{concierto.sala}</p>
                                </div>
                            </div>

                            <a href={concierto.entradas_link} className="text-7xl">
                                Entradas
                            </a>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Conciertos