import React from 'react'
import {Container, Title, Subtitle, Text, ContainerTexts, FlexRow} from '../components/StyledComponents'
import CardImage from '../components/CardImage'
import styled from 'styled-components'

const FlexRowWithMargin = styled(FlexRow)`
    margin-bottom: 8vh;
    justify-content: space-around;
    width: 100%;
`

const ScreenDefault = (props) => {
    return <Container image={props.image}>
        <div style={{flex: 1}}></div>
        <ContainerTexts>
            <Title>{props.title}</Title>
        </ContainerTexts>
        <FlexRowWithMargin>
            {props.subMenus && props.subMenus.map((menu) => {
            return <CardImage title={menu.title} image={menu.image} path={menu.path}/>
            })}
        </FlexRowWithMargin>
        </Container>
}

export default ScreenDefault