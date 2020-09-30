import React from 'react'
import styled from 'styled-components'
import Platos from '../Resumen/Platos/Platos'

const Title = styled.h1`
    font-weight: 500;
    color:  ${({ theme }) => theme.textColor};
    font-size: 1.3rem;
`


const Productos = () => {
    return (
        <div>
            <Title>
                <strong>Categoría </strong>de productos
            </Title>
            <Platos/>
        </div>
    )
}

export default Productos
