import React from 'react'
import styled from 'styled-components'
import GraficoProductoPopular from './GraficoProductoPopular'

const Container = styled.div`
    background-color: ${({theme}) => theme.secondary};
    width: 100%;
    margin-right: 0.5rem;
    padding:1rem;
    border-radius: 0.5rem;

`

const ContenedorProductoPopular = () => {
    return (
        <Container>
            <GraficoProductoPopular/>
        </Container>
    )
}

export default ContenedorProductoPopular
