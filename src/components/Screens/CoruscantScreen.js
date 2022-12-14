import Body from '../Body'
import Tattoine from '../../Images/TattoineImg.png'
import Coruscant from '../../Images/CorcuscantImg.png'
import Mustafar from '../../Images/MustafarImg.png'
import Endor from '../../Images/EndorImg.png'

const CoruscantScreen = () => {
    return <Body
        planetImage={Coruscant}
        tituloPrincipal={'CORUSCANT'}
        subTituloPrincipal={'THE REPUBLIC PLANET'}
        textPrincipal={'Cosmopolitan urban world consisting of one planet-wide city. Governmental center of the Galactic Republic and later the Galactic Empire.'}
        TattoineImg={Tattoine}
        EndorImg={Endor}
        MustafarImg={Mustafar}
        CoruscantImg={Coruscant}
        />    
}

export default CoruscantScreen