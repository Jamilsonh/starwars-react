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
import OsTresPilaresScreen from './OsTresPilaresScreen'
import SabreDeLuzScreen from './SabreDeLuzScreen'
import CavaleiroJediScreen from './CavaleiroJediScreen'
import FilosofiaScreen from './FilosofiaScreen'
import DualidadeScreen from './DualidadeScreen'
import RegraScreen from './RegraScreen'
import CodigoScreen from './CodigoScreen'
import ForcaVivaScreen from './ForcaVivaScreen'
import GuerrasClonicasScreen from './GuerrasClonicasScreen'
import GuerraImperioScreen from './GuerraImperioScreen'
import ConsequenciasScreen from './ConsequenciasScreen'
import GuerraRepublicaScreen from './GuerraRepublicaScreen'
import SensibilidadeScreen from './SensibilidadeScreen'
import HabilidadesScreen from './HabilidadesScreen'
import EvoluçãoScreen from './EvoluçãoScreen'
import ControleScreen from './ControleScreen'



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
                <Route path={'/tresPilares'} component={OsTresPilaresScreen}/>
                <Route path={'/sabreDeLuz'} component={SabreDeLuzScreen}/>
                <Route path={'/CavaleiroJedi'} component={CavaleiroJediScreen}/>
                <Route path={'/filosofia'} component={FilosofiaScreen}/>
                <Route path={'/dualidade'} component={DualidadeScreen}/>
                <Route path={'/regra'} component={RegraScreen}/>
                <Route path={'/codigo'} component={CodigoScreen}/>
                <Route path={'/forcaViva'} component={ForcaVivaScreen}/>
                <Route path={'/guerrasClonicas'} component={GuerrasClonicasScreen}/>
                <Route path={'/guerraImperio'} component={GuerraImperioScreen}/>
                <Route path={'/consequencias'} component={ConsequenciasScreen}/>
                <Route path={'/guerraRepublica'} component={GuerraRepublicaScreen}/>
                <Route path={'/sensibilidade'} component={SensibilidadeScreen}/>
                <Route path={'/habilidades'} component={HabilidadesScreen}/>
                <Route path={'/evolução'} component={EvoluçãoScreen}/>
                <Route path={'/controle'} component={ControleScreen}/>
            </Switch>
        </BrowserRouter>
        </AppShellContainer>
}

export default AppShell