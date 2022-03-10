import conciertos from "../data/conciertos-info"

const Conciertos = ( props ) => {

    return (
        <div data-component='Cociertos' className='w-full flex py-5 justify-center'>
            <div className='w-full lg:max-w-6xl px-5 xl:px-2 text-yellow'>
                <h2>Conciertos</h2>
                <div className='w-full'>
                    {conciertos.map((concierto, index) => (
                        <div key={index}>
                            <h5>{concierto.ciudad}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Conciertos