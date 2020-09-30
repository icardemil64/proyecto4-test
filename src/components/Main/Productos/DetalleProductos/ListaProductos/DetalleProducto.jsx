import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display:flex;
    cursor:pointer;
    margin: 0.3rem 0;
    background-color: ${({theme}) => theme.primary};
    border-bottom: 1px solid rgba(190,190,190,0.22);
    &:hover{
        background-color: ${({ theme }) => theme.menuHoverColor};
    }
`
const Text = styled.h1`
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: 500;
    color: #8B8A93;
    margin-left:0.1rem;
    text-align:center;
`
const IdProducto = styled(Text)`
    width: 15%;
`

const Nombre = styled(Text)`
    width: 45%;
`

const Precio = styled(Text)`
    width: 15%;
`

const Estado = styled(Text)`
    width: 25%;
`


const DetalleProducto = () => {
    return (
        <Container>
            <IdProducto>0123</IdProducto>
            <Nombre>Barros Luco</Nombre>
            <Precio>$10.000</Precio>
            <Estado>Disponible</Estado>
        </Container>
    )
}

export default DetalleProducto
