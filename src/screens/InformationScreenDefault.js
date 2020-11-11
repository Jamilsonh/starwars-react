import React from 'react'
import {Container, Title, Subtitle, Text, ContainerTexts, FlexRow, CardContainerText} from '../components/StyledComponents'
import CardImage from '../components/CardImage'
import styled from 'styled-components'

const FlexRowWithMargin = styled(FlexRow)`
    margin-bottom: 8vh;
    justify-content: space-around;
    width: 100%;
`

const InformationScreenDefault = (props) => {
    return <Container image={props.image}>
        <CardContainerText>
            <Title>{props.title}</Title>
            <Subtitle>{props.subtitle}</Subtitle>
        </CardContainerText>
        </Container>
}

export default InformationScreenDefault