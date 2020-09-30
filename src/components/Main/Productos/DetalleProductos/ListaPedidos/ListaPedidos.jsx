import React from 'react'
import styled from 'styled-components'
import DetallePedido from './DetallePedido'

const Container = styled.div`
    width: 100%;
    padding: 0.2rem;
    margin:0.2rem;
    border-radius: 0.2rem;
`

const ContainerPedido = styled.div`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.buttonColor};
    border-radius: 1rem;
    padding: 3rem;
`

const Title = styled.div`
    font-weight: 500;
    font-size: 1.3rem;
    margin-bottom: 1rem;
`


const ListaPedidos = () => {
    return (
        <Container>
            <Title>
                <strong>Resumen </strong>de pedido
            </Title>
            <ContainerPedido>
                <DetallePedido/>
                <DetallePedido/>
                <DetallePedido/>
                <DetallePedido/>
                <DetallePedido/>
            </ContainerPedido>
        </Container>
    )
}

export default ListaPedidos
