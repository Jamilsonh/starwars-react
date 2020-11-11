import styled from 'styled-components'

const Container = styled.div`
display: flex;
background-image: url(${props => props.image});
justify-content: space-between;
    background-size: cover;
flex: 1;
flex-direction: column;
align-items: center;
color: white;
text-align: center;
`

const FlexRow = styled.div`
display: flex;
`

const ContainerTexts = styled.div`
display: flex;
justify-content: center;
flex: 1;
flex-direction: column;
align-items: center;
color: white;
text-align: center;
`


const CardContainerText = styled.div`
    border: 1px solid yellow;
    margin: 313px 133px 30px 133px;
    border-radius: 50px;
    padding: 87px 36px;
`

const TextWithSpaceAndUppercase = styled.div`
text-transform: uppercase;
letter-spacing: 10px;
`

const Title = styled(TextWithSpaceAndUppercase)`
font-size: 50px;
`

const Subtitle = styled.div`
font-size: 30px;
margin-top: 5%;
`
const Text = styled.div`
font-weight: 300;
margin-top: 15px;
font-size: 16px;
`

export {Text, Subtitle, Title, ContainerTexts, Container, TextWithSpaceAndUppercase, FlexRow, CardContainerText}