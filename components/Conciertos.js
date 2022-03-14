import conciertos from "../data/conciertos-info"

const Conciertos = ( props ) => {

    return (
        <div data-component='Cociertos' id='conciertos' className='w-full flex py-5 justify-center'>
            <div className='w-full lg:max-w-6xl px-5 xl:px-2 text-yellow'>
                <h2 className='text-5xl mb-10'>Conciertos</h2>
                
                <div className='w-full'>
                    {conciertos.map((concierto, index) => (
                        <div key={index} className='flex justify-between mb-10'>
                            
                            <div className='flex items-center gap-4'>
                                <p className="text-7xl font-semibold text-white">{concierto.dia}</p>
                                <div className="text-2xl">
                                    <p>{concierto.mes}</p>
                                    <p>{concierto.ano}</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <p>{concierto.ciudad}</p>
                                <p>{concierto.sala}</p>
                            </div>

                            <a href={concierto.entradas_link}>
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