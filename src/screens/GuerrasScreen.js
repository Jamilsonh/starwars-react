import React from 'react'
import ScreenDefault from './ScreenDefault'
import guerras from '../images/nave.jpg'
import GuerraMenu from '../constants/guerras'

const GuerrasScreen = (props) => {
    return <ScreenDefault image={guerras} title={'STAR WARS - OS CAMINHOS DA FORÇA'} subMenus={GuerraMenu}/>
}

export default GuerrasScreen