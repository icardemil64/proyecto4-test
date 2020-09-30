import React from 'react'
import styled from 'styled-components'
import UltimasEntradas from './UltimasEntradas'
import UltimasSalidas from './UltimasSalidas'


const Container = styled.div`
    margin-bottom: 2rem;
`
const MovimientoTexto = styled.h4`
    font-weight: 500;
    color: ${({ theme }) => theme.textColor}; 
`
const UltimosMovimientos = () => {
    return (
        <Container>
            <MovimientoTexto>Últimas entradas</MovimientoTexto>
            <UltimasEntradas/>
            <MovimientoTexto>Últimas salidas</MovimientoTexto>
            <UltimasSalidas/>
        </Container>
    )
}

export default UltimosMovimientos
