import React from 'react'
import {Container, Title, Subtitle, Text, ContainerTexts} from '../components/StyledComponents'
import darthvader from '../images/dartvader.jpg'

const HomeScreen = (props) => {
    return <Container image={darthvader}>
        <ContainerTexts>
        <Title>STAR WARS - OS CAMINHOS DA FORÇA</Title>
        <Subtitle>STAR WARS - OS CAMINHOS DA FORÇA</Subtitle>
        </ContainerTexts>
        </Container>
}

export default HomeScreen