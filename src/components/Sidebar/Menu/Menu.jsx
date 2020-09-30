import React from 'react'
import styled from 'styled-components'
import MenuItem from './MenuItem'
import { Link } from "react-router-dom";
const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`
const Menu = () => {
    return (
        <Container>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <MenuItem title="Resumen" icon="fa-solid:home"/>
            </Link>
            <Link to="/pedidos" style={{ textDecoration: 'none' }}>
                <MenuItem title="Pedidos" icon="fa-solid:shipping-fast"/>
            </Link>
            <Link to="/productos" style={{ textDecoration: 'none' }}>
                <MenuItem title="Productos" icon="fa-solid:hamburger"/>
            </Link>
            <Link to="/historial" style={{ textDecoration: 'none' }}>
                <MenuItem title="Historial" icon="fa-solid:receipt"/>
            </Link>
            <Link to="/clientes" style={{ textDecoration: 'none' }}>
                <MenuItem title="Clientes" icon="fa-solid:user-friends"/>
            </Link>
        </Container>
    )
}

export default Menu
