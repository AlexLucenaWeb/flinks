import { useState, useEffect } from 'react'

import fondo from '../public/assets/images/fondo_dinamico/fondo.png'
import monje from '../public/assets/images/fondo_dinamico/monje_movil.png'
import luz from '../public/assets/images/fondo_dinamico/luz.png'
import luz_rayos from '../public/assets/images/fondo_dinamico/luz_rayos.png'


const FondoMovil = ( props ) => {

    const style = {
        backgroundImage : `url('${fondo.src}')`
    }

    const monkStyle = {
        backgroundImage: `url('${monje.src}')`,    
        top: 0,
        right: 0,
    }

    const lightStyle = {
        backgroundImage: `url('${luz.src}')`,
        bottom: 0,
        left: 0,
    }

    const lighRaytStyle = {
        backgroundImage: `url('${luz_rayos.src}')`,
        bottom: 0,
        left: 0
    }
    
    return (
        <div data-component="FondoMovil" className='overflow-hidden h-full w-full relative' style={style}>
            <div className='absolute h-full w-full bg-cover bg-no-repeat' style={lightStyle}></div>
            <div className='absolute h-full w-full bg-cover bg-no-repeat' style={lighRaytStyle}></div>
            {/* <div data-img="monk" className='absolute w-[500px] h-[500px] bg-cover bg-no-repeat animate-levitar' style={monkStyle}></div> */}
            <img src={monje.src} width="600" height="" className="w-[600px] animate-levitar absolute top-0 right-0"/>
        </div>
    )
}

export default FondoMovil