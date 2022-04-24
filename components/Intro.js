import { useState, useEffect } from 'react'

import FondoDinamico from './FondoDinamico'

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
            <div className='fixed inset-0 h-screen w-screen z-[-2]'>
                <FondoDinamico/>
            </div>
            {/* Flinks logo gif */}
            <img src={logoAnimate.src} width="900" height="" alt="logo" className={`absolute top-1/2 left-1/2 -mt-[10%] -ml-28 transition-opacity duration-700 ${logoOpacity}`}/> 
            {/* Black opacity layer */}
            <div className={`fixed inset-0 h-screen w-screen bg-black z-[-1]`} style={opacityStyle}></div>
            {showScrollDown &&
                <div className={`text-white absolute bottom-10 left-1/2 transition-all duration-300 ${showScrollDown}`}>
                    <p>Scroll Down </p>
                </div>
            }
        </div>
    )
}

export default Intro