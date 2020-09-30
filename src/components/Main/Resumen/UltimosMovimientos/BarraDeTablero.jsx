import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    padding: 0.4rem 1rem;
    background-color: ${({ theme }) => theme.secondary};
    margin: 1rem 0;
    border-radius: 5px;
`

const Text = styled.h1`
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    margin-left:0.1rem;
`
const IdPedido = styled(Text)`
    width: 10%;
`

const Direccion = styled(Text)`
    width: 30%;
`

const Medio = styled(Text)`
    width: 10%;
`

const Hora = styled(Text)`
    width: 10%;
`

const PedidoEn = styled(Text)`
    width: 15%;
`

const Total = styled(Text)`
    width: 15%;
`

const Estado = styled(Text)`
    
`
const BarraDeTablero = () => {
    return (
        <Container>
            <IdPedido>ID</IdPedido>
            <Direccion>Dirección</Direccion>
            <Medio>Medio</Medio>
            <Hora>Hora</Hora>
            <PedidoEn>Pedido en</PedidoEn>
            <Total>Total</Total>
            <Estado>Estado</Estado>
        </Container>
    )
}

export default BarraDeTablero
