import React, { useState } from 'react'
import {LogoContainer, Img, HeaderContainer, Button, Menu, MenuItem, RightButtonContainer} from './styles'
import logo from '../../Images/logo.png'

const Header = (props) => {
    const [menuAtivo, setMenuAtivo] = useState(0);

    return <HeaderContainer>
        <LogoContainer>
            <Img src={logo} />
        </LogoContainer>
        <Menu>
            {props.menuItems.map((item, index) => 
                <MenuItem
                    to={'/' + item.path}
                    onClick={() => setMenuAtivo(index)}
                    ativo={menuAtivo === index}>{item.name}</MenuItem>)}
        </Menu>
        <RightButtonContainer><Button>BOOK NOW</Button></RightButtonContainer>
    </HeaderContainer>
}

export default Header