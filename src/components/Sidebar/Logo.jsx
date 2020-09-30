import React from 'react'
import styled from 'styled-components'
import Imagen from '../../assets/images/sausage2.png'


const Container = styled.div`
    margin-top: 5rem;
    
`

const LogoImg = styled.img`
    display:block;
    margin-left: auto;
    margin-right: auto;
    width: 30%;
`
const EmpresaName = styled.h1`
    text-align:center;
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};

`

const Logo = () => {
    return (
        <Container>
            <LogoImg src={Imagen}/>
            <EmpresaName>Nombre empresa</EmpresaName>
        </Container>
    )
}

export default Logo
