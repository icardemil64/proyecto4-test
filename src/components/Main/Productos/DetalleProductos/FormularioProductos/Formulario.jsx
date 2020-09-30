import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    padding: 0.2rem;
    margin:0.2rem;
    border-radius: 0.2rem;
`
const ContainerPedido = styled.div`
    width: 100%;
    border-radius: 1rem;
    padding: 3rem;
    background-color: ${({theme}) => theme.secondary};
`
const Title = styled.div`
    font-weight: 500;
    font-size: 1.3rem;
    margin-bottom: 1rem;
`
const Input = styled.input`
    width:100%;
    border: none;
    background-color: ${({theme}) => theme.secondary};
    border-bottom: 1px solid ${({theme}) => theme.foodColor};
    margin-top:0.3rem;
    margin-bottom: 1.2rem;
    font-size: 1rem;
    padding-left: 1rem;
    &:disabled{
        color: #515151;
    }
`
const Button = styled.button`
    width: 100%;
    padding: 0.6rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    text-align:center;
    background-color: ${({theme}) => theme.botonProductos};
    color: ${({theme}) => theme.primary};
    cursor: pointer;
    border: none;
    font-size: 1rem;
`

const Formulario = () => {
    return (
        <Container>
            <Title>
                <strong>Agregar </strong>producto
            </Title>
            <ContainerPedido>
                <form>
                    Nombre: <Input/>
                    Precio: <Input/>
                    Categoría: <Input defaultValue="Pizza" disabled/>
                </form>
                <Button>
                    Crear
                </Button>
            </ContainerPedido>
        </Container>
    )
}

export default Formulario
