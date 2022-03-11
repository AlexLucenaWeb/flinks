import bg from '../public/assets/images/fondo-test.png'

const Intro = ( props ) => {

    console.log(bg)

    const style = {
        backgroundImage : `url('${bg.src}')`
    }

    return (
        <div data-component="intro" className="w-screen h-screen relative">
            <div className='fixed inset-0 h-screen w-screen bg-cover z-[-1]' style={style}></div>

        </div>
    )
}

export default Intro