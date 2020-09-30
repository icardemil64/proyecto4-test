import React from 'react'
import styled from 'styled-components'
import Image from '../assets/images/pizza-perfil.png'

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
`

const PerfilImg = styled.img`
    height: 2rem;
    margin: 0 1rem;
    cursor: pointer;
`

const UserName = styled.h1`
    font-size: 0.9rem;
    font-weight: 300;
    color: ${({ theme }) => theme.movimientoTextColor};
`
const Nav = () => {
    return (
        <Container>
            <UserName>Nombre usuario</UserName>
            <PerfilImg src={Image}/>
        </Container>
    )
}

export default Nav
