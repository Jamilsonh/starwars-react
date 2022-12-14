import Body from '../Body'
import Tattoine from '../../Images/TattoineImg.png'
import Coruscant from '../../Images/CorcuscantImg.png'
import Mustafar from '../../Images/MustafarImg.png'
import Endor from '../../Images/EndorImg.png'

const MustafarScreen = () => {
    return <Body 
        planetImage={Mustafar} 
        tituloPrincipal={'MUSTAFAR'} 
        subTituloPrincipal={'THE FIRE PLANET'} 
        textPrincipal={'Volcanic planet used by the Techno Union to mine for valuable materials. Hiding place of the Separatist Council during the final days of the Clone Wars, and the location of the duel between Anakin Skywalker and Obi-Wan Kenobi that results in the formers disfigurement.'}
        TattoineImg={Tattoine}
        EndorImg={Endor}
        MustafarImg={Mustafar}
        CoruscantImg={Coruscant}
        />
}

export default MustafarScreen