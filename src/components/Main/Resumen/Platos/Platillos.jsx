import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    box-sizing: border-box;
    width: 6rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.secondary};
    padding-top:1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 1rem;
    &:hover{
        background-color: ${({ theme }) => theme.menuHoverColor};
        color: ${({theme}) => theme.foodColorHover};
    }
`

const ContainerIcon = styled.div`
    height: 4rem;
    display:flex;
    align-items:center;
    justify-content:center;
    border: 1px solid ${({ theme }) => theme.buttonColor};
    border-radius: 1rem;
`

const Icon = styled.span`
    color: ${({ theme }) => theme.foodColor};
    font-size: 2rem;
`

const NamePlatillo = styled.h4`
    font-size: 0.9rem;
    font-weight: 300;
    color: ${({ theme }) => theme.foodColor};
`
const Platillos = ({comida,icono}) => {
    return (
        <Container>
            <ContainerIcon>
                <Icon className="iconify" data-inline="false" data-icon={icono}></Icon>
            </ContainerIcon>
            <NamePlatillo>{comida}</NamePlatillo>
        </Container>
    )
}

export default Platillos
