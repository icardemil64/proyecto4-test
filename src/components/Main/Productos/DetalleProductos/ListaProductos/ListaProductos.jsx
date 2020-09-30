import React from 'react'
import styled from 'styled-components'
import BarraProductos from './BarraProductos'
import BotonAgregarProducto from './BotonAgregarProducto'
import DetalleProducto from './DetalleProducto'

const Container = styled.div`
    width: 100%;
    padding: 0.2rem;
    margin:0.2rem;
    border-radius: 0.2rem;
`

const ContainerProductos = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 1rem;
    padding: 0.5rem;
`

const Title = styled.div`
    font-weight: 500;   
    font-size: 1.3rem;
    margin-bottom: 1rem;
`


const ListaProductos = () => {
    return (
        <Container>
            <Title>
                <strong>Seleccionar </strong> producto
            </Title>
            <ContainerProductos>
                <BarraProductos/>
                <DetalleProducto/>
                <DetalleProducto/>
                <DetalleProducto/>
                <DetalleProducto/>
                <DetalleProducto/>
                <DetalleProducto/>
                <DetalleProducto/>
                <DetalleProducto/>
                <BotonAgregarProducto/>
            </ContainerProductos>
        </Container>
    )
}

export default ListaProductos
