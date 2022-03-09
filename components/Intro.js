import background from '../public/assets/images/fondo-test.png'

const Intro = ( props ) => {

    console.log(background)

    const style = {
        backgroundImage : `url('/_next/static/media/fondo-test.ce21d2c4.png')`
    }
    return (
        <div data-component="intro" className="w-full h-screen" style={style}>

        </div>
    )
}

export default Intro