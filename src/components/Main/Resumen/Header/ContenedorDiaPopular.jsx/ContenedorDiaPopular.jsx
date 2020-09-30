import React from 'react'
import styled from 'styled-components'
import GraficoDiaPopular from './GraficoDiaPopular'

const Container = styled.div`
    background-color: ${({theme}) => theme.secondary};
    width: 100%;
    padding:1rem;
    border-radius: 0.5rem;

`

const ContenedorDiaPopular = () => {
    return (
        <Container>
            <GraficoDiaPopular/>
        </Container>
    )
}

export default ContenedorDiaPopular
