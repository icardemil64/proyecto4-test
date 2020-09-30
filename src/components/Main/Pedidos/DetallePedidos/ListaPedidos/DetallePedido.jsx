import React from 'react'
import styled from 'styled-components'

const Text = styled.h1`
    font-size: 0.8rem;
    font-weight: 500;
    color: #8B8A93;
    margin-left:0.1rem;
    text-align:center;
`

const Nombre = styled(Text)`
    width: 40%;
`

const Cantidad = styled(Text)`
    width: 20%;
`

const Precio = styled(Text)`
    width: 10%;
`

const EliminarProducto = styled(Text)`
    width: 10%;
    visibility:hidden;
    font-weight: 600;
`

const Container = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    margin: 0.3rem 0;
    background-color: ${({theme}) => theme.primary};
    border-right: 5px solid ${({theme}) => theme.menuHoverColor};
    &:hover{
        background-color: ${({ theme }) => theme.secondary};
    }
    &:hover ${EliminarProducto}{
        visibility:visible;
        cursor: pointer;
    }
`

const DetallePedido = () => {
    return (
        <Container>
            <Nombre>
                Pizza Italiana
            </Nombre>
            <Cantidad>
                x3
            </Cantidad>
            <Precio>
                $30.000
            </Precio>
            <EliminarProducto>
                x
            </EliminarProducto>
        </Container>
    )
}

export default DetallePedido
