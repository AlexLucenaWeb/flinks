import { useState, useEffect } from 'react'
import fondo from '../public/assets/images/fondo.png'

import columna_left from '../public/assets/images/columna_left.png'
import columna_right from '../public/assets/images/columna_right.png'
import monje from '../public/assets/images/monje.png'
import luz from '../public/assets/images/luz.png'
import luz_rayos from '../public/assets/images/luz_rayos.png'


const FondoDinamico = ( props ) => {

    const style = {
        backgroundImage : `url('${fondo.src}')`
    }

    const [columnLeftPosition, setColumnLeftPosition ] = useState({ bottom: 0, left: 0})
    const [columnRightPosition, setColumnRightPosition ] = useState({ bottom: 0, right: 0})
    const [monkPosition, setMonkPosition ] = useState({ top: -50 , left: 0})
    const [luzPosition, setLuzPosition ] = useState({ top: 0 , left: 400})
    const [luzRayosPosition, setLuzRayosPosition ] = useState({ top: 0 , left: 0})

    const columnLeftStyle = {
        bottom: columnLeftPosition.bottom,
        left: columnLeftPosition.left
    }

    const columnRightStyle = {
        bottom: columnRightPosition.bottom,
        right: 0 + columnRightPosition.right,
    }

    const monkStyle = {
        top: -50 + monkPosition.top,
        left: 0 + monkPosition.left,
    }

    const lightStyle = {
        top: luzPosition.top,
        left: 400 + luzPosition.left,
    }

    const lighRaytStyle = {
        top: luzRayosPosition.top,
        left: luzRayosPosition.left,
    }

    const mouseMoveHandler = (ev) => {
        setColumnLeftPosition({bottom: -ev.screenY/300, left: -ev.screenX/300})
        setColumnRightPosition({bottom: -ev.screenY/50, right: ev.screenX/50})
        setMonkPosition({top: ev.screenY/75, left: -ev.screenX/75})
        setLuzPosition({top: ev.screenY/300, left: -ev.screenX/300})
    }

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler)
    }, [])
    
    return (
        <div data-component="FondoDinamico" className='h-screen w-screen relative' style={style}>
            <img  src={luz.src} alt="Columna Ilustration" className="absolute scale-150 opacity-30" style={lightStyle} />
            <img  src={luz_rayos.src} alt="Columna Ilustration" className="absolute opacity-30" style={lighRaytStyle} />
            <img  src={monje.src} alt="Columna Ilustration" className="absolute scale-125" style={monkStyle} />
            <img  src={columna_left.src} alt="Columna Ilustration" className="absolute" style={columnLeftStyle} />
            <img  src={columna_right.src} alt="Columna Ilustration" className="absolute" style={columnRightStyle} />
        </div>
    )
}

export default FondoDinamico