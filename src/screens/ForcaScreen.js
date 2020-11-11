import React from 'react'
import jedi from '../images/frc0.jpg'
import ScreenDefault from './ScreenDefault'
import ForcaMenu from '../constants/forca'

const ForcaScreen = (props) => {
    return <ScreenDefault image={jedi} title={'STAR WARS - OS CAMINHOS DA FORÇA'} subMenus={ForcaMenu}/>
}

export default ForcaScreen