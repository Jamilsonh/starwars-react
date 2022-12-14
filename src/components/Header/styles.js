import styled from 'styled-components'
import {Link} from 'react-router-dom'

const HeaderContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
`

const LogoContainer = styled.div`
    width: 220px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Img = styled.img`
    width: 100%;
`

const Menu = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    width: 1000px;
    height: 200px;
    font-size: 20px;
`

const MenuItem = styled(Link)`
    text-transform: uppercase;
    width: 150px;
    color: white;
    font-weight: 300;
    align-items: center;
    justify-content: center;
    padding: 3vw;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    opacity: ${props => props.ativo ? 1 : 0.6};
    letter-spacing: 5px;
    text-decoration: none;
`

const RightButtonContainer = styled.div`
    align-items: center;
    width: 220px;
    height: 100%;
    display: flex;
`

const Button = styled.button`
    background: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 400px;
    font-size: 16px;
    height: 50px;
    cursor: pointer;
    border: 3px solid yellow;
    color: white;
    width: 100%;
    padding: 10px;
    border-radius: 50px;
    letter-spacing: 7px;
    align-items: center;
    justify-content: center;
    :hover 
        {
            border: 6px solid yellow;
            transition: all .2s ease-in-out;
        }    
`

export { LogoContainer, Img, HeaderContainer, Button, Menu, MenuItem, RightButtonContainer}