import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import menu from '../menu'
import JediScreen from './JediScreen'
import SithScreen from './SithScreen'
import GuerrasScreen from './GuerrasScreen'
import ForcaScreen from './ForcaScreen'
import HomeScreen from './HomeScreen'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const AppShellContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

const AppShell = (props) => {
    return <AppShellContainer>

<BrowserRouter>
        <Header menuItems={menu}/>
            <Switch>
                <Route path={'/'} exact component={HomeScreen}/>
                <Route path={'/jedi'} component={JediScreen}/>
                <Route path={'/sith'} component={SithScreen}/>
                <Route path={'/guerras'} component={GuerrasScreen}/>
                <Route path={'/forca'} component={ForcaScreen}/>
            </Switch>
        </BrowserRouter>
        </AppShellContainer>
}

export default AppShell