import react from 'react'
import styled from 'styled-components'

const Image = styled.div`
    width: 336px;
    height: 224px;
    background-image: url(${props => props.src});
    background-size: cover;
    border-radius: 30px;
    border: 2px solid #EDFF1A;
`

const CardStyled = styled.div`
    margin: 0 10px;
    cursor: pointer;
`
const Title = styled.div`
    color: white;
    font-size: 20px;
    margin-top: 44px;
`

const Card = props => {
    return <CardStyled onClick={() => {
        window.location.href = props.path
    }}>
        <Image src={props.image}></Image>
        <Title>{props.title}</Title>
    </CardStyled>
}

export default Card