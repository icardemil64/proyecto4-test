import React from 'react'
import styled from 'styled-components'
import Platillos from './Platillos'

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    margin-top: 1.5rem;
    margin-bottom: 3rem;
`
const Platos = () => {
    return (
        <Container>
            <Platillos comida="Pizza" icono="emojione:pizza"/>
            <Platillos comida="Sandwich" icono="emojione:hamburger"/>
            <Platillos comida="Sushi" icono="emojione:sushi"/>
            <Platillos comida="Completo" icono="emojione:hot-dog"/>
            <Platillos comida="Bebida" icono="emojione:beer-mug"/>
            <Platillos comida="Otros" icono="emojione:french-fries"/>
        </Container>
    )
}

export default Platos
