import Body from '../Body'
import FundoInicial from '../../Images/FundoIncial.jpg'
import Tattoine from '../../Images/TattoineImg.png'
import Coruscant from '../../Images/CorcuscantImg.png'
import Mustafar from '../../Images/MustafarImg.png'
import Endor from '../../Images/EndorImg.png'

const TattoineScreen = () => {
    return <Body 
        image={FundoInicial} 
        planetImage={Tattoine} 
        tituloPrincipal={'TATTOINE'} 
        subTituloPrincipal={'HOSTILE DESERT PLANET'} 
        textPrincipal={'Tattooine has had a population explosion following the search for valuable mining deposits on the planets silicate surface.'}
        TattoineImg={Tattoine}
        EndorImg={Endor}
        MustafarImg={Mustafar}
        CoruscantImg={Coruscant}
        />
}

export default TattoineScreen