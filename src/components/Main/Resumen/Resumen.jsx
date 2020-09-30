import React from 'react'
import styled from 'styled-components'
import HeaderContainer from './Header/HeaderContainer'
import UltimosMovimientos from './UltimosMovimientos/UltimosMovimientos'

const Container = styled.div`
`

const Title = styled.h1`
    font-weight: 500;
    color:  ${({ theme }) => theme.textColor};
    font-size: 1.3rem;
`

const Resumen = () => {
    return (
        <Container>
            <Title><strong>Algunos</strong> datos</Title>
            <HeaderContainer/>
            <Title><strong>Últimos</strong> movimientos</Title>
            <UltimosMovimientos/>
        </Container>
    )
}

export default Resumen
