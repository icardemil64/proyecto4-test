import React from 'react'
import styled from 'styled-components'
import ContenedorDiaPopular from './ContenedorDiaPopular.jsx/ContenedorDiaPopular'
import ContenedorProductoPopular from './ContenedorProductoPopular/ContenedorProductoPopular'


const Container = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
`

const Estadisticas = () => {
    return (
        <Container>
            <ContenedorProductoPopular/>
            <ContenedorDiaPopular/>
        </Container>
    )
}

export default Estadisticas
