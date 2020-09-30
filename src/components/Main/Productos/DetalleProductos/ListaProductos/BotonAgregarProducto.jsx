import React from 'react'
import styled from 'styled-components'


const Text = styled.h1`
    font-size: 0.7rem;
    text-transform: uppercase;
    font-weight: 500;
    color: #8B8A93;
    margin-left:0.1rem;
    text-align:center;
`
const Container = styled.div`
    cursor: pointer;
    width: 100%;
    margin: 0.3rem 0;
    padding: 0.2rem;
    background-color: ${({theme}) => theme.botonProductos};
    border-bottom: 1px solid rgba(190,190,190,0.22);
    border-radius: 0.2rem;
    &:hover{
        background-color: #f7bcbb;
    };
`
const BotonAgregarProducto = () => {
    return (
        <Container>
            <Text>
                AGREGAR PRODUCTO
            </Text>
        </Container>
    )
}

export default BotonAgregarProducto
