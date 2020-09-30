import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(190,190,190,0.22);
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    transition: all ease-in-out 200ms;
    &:hover {
        /* box-shadow: 0px 10px 8px -8px rgba(138, 153, 192, 0.6); */
        background-color: ${({ theme }) => theme.menuHoverColor};
    }
`
const Text = styled.h1`
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.movimientoTextColor};
    margin: 0;
`
const IdPedido = styled(Text)`
    margin-left:0.5rem;
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
    width: 14%;
`

const Estado = styled(Text)`
    
`
const Movimiento = () => {
    return (
        <Container>
           <IdPedido>#0123456</IdPedido>
           <Direccion>Lomas de miramar. Pasaje 2. Casa 31</Direccion>
           <Medio>Facebook</Medio>
           <Hora>21:00</Hora>
           <PedidoEn>2020-09-27</PedidoEn>
           <Total>$30.000</Total>
           <Estado>En cocina</Estado> 
        </Container>
    )
}

export default Movimiento
