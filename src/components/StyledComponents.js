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
margin: 250px 103px 30px 103px;
border-radius: 50px;
padding: 50px 36px;
background-color: rgba(0, 0, 0, 0.5);
`
const TextWithSpaceAndUppercase = styled.div`
text-transform: uppercase;
letter-spacing: 10px;
`
const Title = styled(TextWithSpaceAndUppercase)`
font-size: 50px;
`
const Title2 = styled(TextWithSpaceAndUppercase)`
font-size: 30px;
`
const Subtitle = styled.div`
font-size: 20px;
margin-top: 4%;
`
const Text = styled.div`
font-weight: 300;
margin-top: 15px;
font-size: 16px;
`
export {Text, Subtitle, Title, ContainerTexts, Title2, Container, TextWithSpaceAndUppercase, FlexRow, CardContainerText}