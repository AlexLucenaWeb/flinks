const Intro = ( props ) => {

    const style = {
        backgroundImage : `url('/_next/static/media/fondo-test.ce21d2c4.png')`
    }
    return (
        <div data-component="intro" className="w-screen h-screen relative">
            <div className='fixed inset-0 h-screen w-screen bg-cover z-[-1]' style={style}></div>

        </div>
    )
}

export default Intro