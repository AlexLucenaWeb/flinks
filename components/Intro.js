import { useState, useEffect } from 'react'

import FondoDinamico from './FondoDinamico'
import FondoMovil from './FondoMovil'

import logoAnimate from '../public/assets/images/flinks_logo_animate.gif'

const Intro = ( props ) => {

    const [ logoOpacity, setLogoOpacity ] = useState('opacity-100')
    const [ bgOpacity, setBgOpacity ] = useState('0')
    const [ showScrollDown, setShowScrollDown ] = useState('opacity-0')

    const opacityStyle = {
        opacity : bgOpacity,
    }

    const hideLogo = () => {
        if (window.scrollY >= 10 ){
            setLogoOpacity('opacity-0')
            setShowScrollDown('opacity-0')

        } else {
            setLogoOpacity('opacity-100')
            setShowScrollDown('opacity-100')
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
        setTimeout(() => {
            setShowScrollDown('opacity-100')
        }, 2000);
    }, [])
    
    return (
        <div data-component="intro" className="w-screen h-screen relative">
            {/* Dynamic bg */}
            <div className='hidden sm:block fixed inset-0 h-screen w-screen z-[-2]'>
                <FondoDinamico/>
            </div>
            <div className='sm:hidden fixed inset-0 h-screen w-screen z-[-2]'>
                <FondoMovil/>
            </div>
            {/* Flinks logo gif */}
            <div className='w-full h-full flex items-center justify-end'>
                <img src={logoAnimate.src} width="900" height="511" alt="logo" className={`hidden lg:blok transition-opacity duration-700 ${logoOpacity}`}/> 
                <img src={logoAnimate.src} width="692" height="393" alt="logo" className={`lg:block transition-opacity duration-700 ${logoOpacity}`}/> 
            </div>
            {/* Black opacity layer */}
            <div className={`fixed inset-0 h-screen w-screen bg-black z-[-1]`} style={opacityStyle}></div>
            {showScrollDown &&
                <div className={`w-full text-white text-xl absolute bottom-10 text-center transition-all duration-300 font-cheddar ${showScrollDown}`}>
                    <p>Scroll Down </p>
                </div>
            }
        </div>
    )
}

export default Intro