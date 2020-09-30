import React from 'react'
import styled from 'styled-components'

const ContainerProductos = styled.div`
    width: 100%;
`

const PlaceholderProducto = styled.div`
    display:flex;
    margin: 0.5rem 0;
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
    width: 10%;
`

const Nombre = styled(Text)`
    width: 40%;
`

const Precio = styled(Text)`
    width: 10%;
`

const Cantidad = styled(Text)`
    width: 20%;
`

const Disponibilidad = styled(Text)`
    width: 20%;
`

const BarraProductos = () => {
    return (
        <div>
            <ContainerProductos>
                <PlaceholderProducto>
                    <IdProducto>ID</IdProducto>
                    <Nombre>Nombre</Nombre>
                    <Precio>Precio</Precio>
                    <Cantidad>Cantidad</Cantidad>
                    <Disponibilidad>Disponibilidad</Disponibilidad>
                </PlaceholderProducto>
            </ContainerProductos>
        </div>
    )
}

export default BarraProductos
