import React from 'react'
import jedi from '../images/jedi.jpg'
import ScreenDefault from './ScreenDefault'
import jediMenu from '../constants/jedi'

const JediScreen = (props) => {
    return <ScreenDefault image={jedi} title={'STAR WARS - OS CAMINHOS DA FORÇA'} subMenus={jediMenu}/>
}

export default JediScreen