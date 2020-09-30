import React from 'react'
import BarraDeTablero from './BarraDeTablero'
import Movimiento from './Movimiento'

const UltimasEntradas = () => {
    return (
        <div>
            <BarraDeTablero estado="entrada"/>
            <Movimiento/>
            <Movimiento/>
            <Movimiento/>
        </div>
    )
}

export default UltimasEntradas
