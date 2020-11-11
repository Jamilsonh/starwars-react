import React from 'react'
import ScreenDefault from './ScreenDefault'
import jedi from '../images/sith.png'
import SithMenu from '../constants/sith'

const SithScreen = (props) => {
    return <ScreenDefault image={jedi} title={'STAR WARS - OS CAMINHOS DA FORÇA'} subMenus={SithMenu}/>
}

export default SithScreen