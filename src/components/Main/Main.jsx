import React from 'react'
import { Route } from "react-router-dom";
import styled from 'styled-components'
import Resumen from './Resumen/Resumen'
import Productos from './Productos/Productos'
import Pedidos from './Pedidos/Pedidos';
import Historial from './Historial/Historial';
import Clientes from './Clientes/Clientes';
import Nav from '../Nav'

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 0 4rem;
`

const Main = () => {
    return (
        <div>
            <Container>
                <Nav/>
                <Route exact path="/" component={Resumen}/>
                <Route exact path="/pedidos" component={Pedidos}/>
                <Route exact path="/productos" component={Productos}/>
                <Route exact path="/historial" component={Historial}/>
                <Route exact path="/clientes" component={Clientes}/>
            </Container>
        </div>
    )
}

export default Main
