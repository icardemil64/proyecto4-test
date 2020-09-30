import React from 'react'
import styled from 'styled-components'
import ListaProductos from './DetallePedidos/ListaProductos/ListaProductos'
import ListaPedidos from './DetallePedidos/ListaPedidos/ListaPedidos'
import Platos from '../Resumen/Platos/Platos'

const Title = styled.h1`
    font-weight: 500;
    color:  ${({ theme }) => theme.textColor};
    font-size: 1.3rem;
`


const ContainerProducto = styled.div`
    display:flex;
    justify-content:space-between;
    border-radius: 0.5rem;
    padding: 0.5rem;
`

const Pedidos = () => {
    return (
        <div>
            <Title>
                <strong>Categoría </strong>de productos
            </Title>
            <Platos/>
            <ContainerProducto>
                <ListaProductos/>
                <ListaPedidos/>
            </ContainerProducto>
        </div>
    )
}

export default Pedidos
