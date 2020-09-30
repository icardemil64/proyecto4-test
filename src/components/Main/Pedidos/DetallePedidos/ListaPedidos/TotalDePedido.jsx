import React from 'react'
import styled from 'styled-components'

const Text = styled.h1`
    font-size: 0.8rem;
    font-weight: 500;
    color: #8B8A93;
    margin-left:0.1rem;
`
const Container = styled.div`
    width: 100%;
    display:flex;
    justify-content:space-around;
    margin: 0.3rem 0;
    background-color: ${({theme}) => theme.primary};
    border-right: 5px solid ${({theme}) => theme.botonProductos};
`

const Button = styled.div`
    width: 100%;
    padding: 0.6rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    text-align:center;
    background-color: ${({theme}) => theme.botonProductos};
    color: ${({theme}) => theme.primary};
    cursor: pointer;
`
const TotalDePedido = () => {
    return (
        <>
            <Container>
                <Text>Total:</Text>
                <Text><strong>$30.000</strong></Text>
            </Container>
            <Button>
                Realizar pedido
            </Button>
        </>
    )
}

export default TotalDePedido
