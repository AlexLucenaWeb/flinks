import { useState, useEffect } from 'react'

import fondo from '../public/assets/images/fondo_dinamico/fondo.png'
import columna_derecha from '../public/assets/images/fondo_dinamico/columna_derecha.png'
import columna_izquierda from '../public/assets/images/fondo_dinamico/columna_izquierda.png'
import monje from '../public/assets/images/fondo_dinamico/monje.png'
import luz from '../public/assets/images/fondo_dinamico/luz.png'
import luz_rayos from '../public/assets/images/fondo_dinamico/luz_rayos.png'


const FondoDinamico = ( props ) => {

    const [opacity, setOpacity ] = useState('opacity-100')

    const style = {
        backgroundImage : `url('${fondo.src}')`
    }

    const [columnLeftPosition, setColumnLeftPosition ] = useState({ bottom: 0, left: 0})
    const [columnRightPosition, setColumnRightPosition ] = useState({ bottom: 0, left: 0})
    const [luzPosition, setLuzPosition ] = useState({ bottom: 0 , left: 0})
    const [luzRayosPosition, setLuzRayosPosition ] = useState({ bottom: 0 , left: 0})

    const columnLeftStyle = {
        backgroundImage: `url('${columna_izquierda.src}')`,
        bottom: columnLeftPosition.bottom,
        left: columnLeftPosition.left
    }

    const columnRightStyle = {
        backgroundImage: `url('${columna_derecha.src}')`,
        bottom: columnRightPosition.bottom,
        left: columnRightPosition.left
    }

    const monkStyle = {
        backgroundImage: `url('${monje.src}')`,   
        bottom: 0,
        left: 0 
    }

    const lightStyle = {
        backgroundImage: `url('${luz.src}')`,
        bottom: luzPosition.bottom,
        left: luzPosition.left
    }

    const lighRaytStyle = {
        backgroundImage: `url('${luz_rayos.src}')`,
        bottom: luzRayosPosition.bottom,
        left: luzRayosPosition.left,
    }

    const mouseMoveHandler = (ev) => {
        setColumnLeftPosition({bottom: ev.screenY/300, left: -ev.screenX/300})
        setColumnRightPosition({bottom: ev.screenY/300, left: -ev.screenX/300})
        setLuzPosition({bottom: ev.screenY/40, left: -ev.screenX/40})
        setLuzRayosPosition({bottom: ev.screenY/50, left: -ev.screenX/50})
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler)
        setTimeout(() => {
            setOpacity('opacity-0')
        }, 1800);
    }, [])
    
    return (
        <div data-component="FondoDinamico" className='h-screen w-screen relative' style={style}>
            <div className={`absolute h-screen w-screen bg-cover bg-no-repeat bg-black z-10 transition-all duration-500 ${opacity}`}></div>
            <div className='absolute h-screen w-screen bg-cover bg-no-repeat' style={lightStyle}></div>
            <div className='absolute h-screen w-screen bg-cover bg-no-repeat' style={lighRaytStyle}></div>
            <div className='absolute h-screen w-screen bg-cover bg-no-repeat animate-levitar' style={monkStyle}></div>
            <div className='absolute h-screen w-screen bg-cover bg-no-repeat ' style={columnLeftStyle}></div>
            <div className='absolute h-screen w-screen bg-cover bg-no-repeat' style={columnRightStyle}></div>
        </div>
    )
}

export default FondoDinamico