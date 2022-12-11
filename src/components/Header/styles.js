import styled from 'styled-components'
import {Link} from 'react-router-dom'

const LogoContainer = styled.div`
    width: 200px;
    padding: 80px 120px;
`

const Img = styled.img`
    width: 100%;
`

const HeaderContainer = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
`

const Button = styled.button`
    background: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 400px;
    font-size: 16px;
    height: 50px;
    cursor: pointer;
    border: 1px solid yellow;
    color: white;
    width: 100%;
    padding: 10px;
    border-radius: 50px;
    letter-spacing: 5px;
    :hover {border: 5px solid yellow;
            transition: all .2s ease-in-out;}
    :hover {font-weight: 800px;}
`

const Menu = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    flex: 1;
`

const MenuItem = styled(Link)`
    text-transform: uppercase;
    color: white;
    font-weight: 300;
    padding: 2vw;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    opacity: ${props => props.ativo ? 1 : 0.6};
    letter-spacing: 5px;
    text-decoration: none;
`

const RightButtonContainer = styled.div`
    align-items: center;
    width: 200px;
    padding: 40px 120px;
    display: flex;
`

export {LogoContainer, Img, HeaderContainer, Button, Menu, MenuItem, RightButtonContainer}