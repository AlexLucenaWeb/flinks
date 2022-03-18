import { useState, useEffect } from 'react'
import bg from '../public/assets/images/capas_web_test.jpg'


const Intro = ( props ) => {

    const [ logoOpacity, setLogoOpacity ] = useState('opacity-100')
    const [ bgOpacity, setBgOpacity ] = useState('0')

    const style = {
        backgroundImage : `url('${bg.src}')`
    }

    const opacityStyle = {
        opacity : bgOpacity,
    }

    const hideLogo = () => {
        if (window.scrollY >= 10 ){
            setLogoOpacity('opacity-0')

        } else {
            setLogoOpacity('opacity-100')
        }
    }

    const bgOpacityScroll = () =>{
        if (window.scrollY <= 1 ){
            setBgOpacity('0')
        } else if (window.scrollY/400 <= 0.75){
            setBgOpacity(window.scrollY/400)
        } else {
            setBgOpacity('.75')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', hideLogo),
        window.addEventListener('scroll', bgOpacityScroll)

    }, [])
    
    return (
        <div data-component="intro" className="w-screen h-screen relative">
            <div className='fixed inset-0 h-screen w-screen bg-cover bg-no-repeat bg-center z-[-2]' style={style}>
                <img src="/_next/static/media/logo_gif.68274365.gif" width="900" height="" alt="logo" className={`absolute top-1/2 left-1/2 -mt-[10%] -ml-28 transition-opacity duration-700 ${logoOpacity}`}/> 
            </div>
            <div className={`fixed inset-0 h-screen w-screen bg-black z-[-1]`} style={opacityStyle}>

            </div>
        </div>
    )
}

export default Intro