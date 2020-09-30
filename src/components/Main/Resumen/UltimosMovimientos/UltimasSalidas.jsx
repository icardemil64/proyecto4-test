import React from 'react'
import BarraDeTablero from './BarraDeTablero'
import Movimiento from './Movimiento'

const UltimasSalidas = () => {
    return (
        <div>
            <BarraDeTablero estado="salida"/>
            <Movimiento/>
            <Movimiento/>
            <Movimiento/>
        </div>
    )
}

export default UltimasSalidas
