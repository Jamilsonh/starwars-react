import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import menu from './components/Menu'
import {
    Route,
    Routes,
} from "react-router-dom";
import EndorScreen from './components/Screens/EndorScreen';
import TattoineScreen from './components/Screens/TattoineScreen';
import MustafarScreen from './components/Screens/MustafarScreen';
import CoruscantScreen from './components/Screens/CoruscantScreen';

const AppShellContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

const AppShell = () => {
    return <AppShellContainer>
        <Header menuItems={menu}/>
            <Routes>
                <Route path='/' element={<TattoineScreen/>} />
                <Route path='/planets' element={<TattoineScreen/>} />
                <Route path='/systems' element={<TattoineScreen/>} />
                <Route path='/locations' element={<TattoineScreen/>} />
                <Route path='/cultures' element={<TattoineScreen/>} />
                <Route path='/tattoine' element={<TattoineScreen/>} />
                <Route path='/endor' element={<EndorScreen/>} />
                <Route path='/mustafar' element={<MustafarScreen/>} />
                <Route path='/coruscant' element={<CoruscantScreen/>} />
            </Routes>
    </AppShellContainer>
}

export default AppShell