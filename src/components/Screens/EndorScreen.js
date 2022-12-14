import Body from '../Body'
import Tattoine from '../../Images/TattoineImg.png'
import Coruscant from '../../Images/CorcuscantImg.png'
import Mustafar from '../../Images/MustafarImg.png'
import Endor from '../../Images/EndorImg.png'

const EndorScreen = () => {
    return <Body 
        planetImage={Endor} 
        tituloPrincipal={'ENDOR'} 
        subTituloPrincipal={'FOREST SPLENDER'} 
        textPrincipal={'Blue gas giant with a complex planetary system, including moons like Sanctuary and Kef Bir, this system was controlled by the Empire until the second Death Star was destroyed'}
        TattoineImg={Tattoine}
        EndorImg={Endor}
        MustafarImg={Mustafar}
        CoruscantImg={Coruscant}
        />
}

export default EndorScreen