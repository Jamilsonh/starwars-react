import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'

const LogoContainer = styled.div`
    width: 200px;
    padding: 80px 70px;
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
    font-weight: 600;
    font-size: 16px;
    height: 50px;
    cursor: pointer;
    border: 1px solid yellow;
    color: white;
    width: 100%;
    padding: 10px;
    border-radius: 50px;
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
    padding: 3.5vw;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    opacity: ${props => props.ativo ? 1 : 0.6};

`
const RightButtonContainer = styled.div`
    align-items: center;
    width: 200px;
    padding: 40px 70px;
    display: flex;
`

const Header = (props) => {
    const [menuAtivo, setMenuAtivo] = useState(0);

    return <HeaderContainer>
        <LogoContainer><Img src={logo} /></LogoContainer>
        <Menu>{props.menuItems.map((item, index) => 
            <MenuItem 
            to={'/'+item.path}
            onClick={() => setMenuAtivo(index)}
             ativo={menuAtivo === index}>{item.name}</MenuItem>)}
             </Menu>
        <RightButtonContainer><Button >CONTATO</Button></RightButtonContainer>
    </HeaderContainer>
}

export default Header