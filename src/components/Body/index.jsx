import {
    ContainerMain,
    ContainerBody, 
    ContainerPlanet,
    Planet, 
    ContainerAreaTexto,
    AreaTexto,
    TituloPrincipal,
    SubTituloPrincipal,
    TextoPrincipal,
    ButtonArea,
    ButtonText,
    MenuInferior,
    SubMenuPlanet,
    SubMenuImageTattoine,
    SubMenuImageCoruscant,
    SubMenuImageMustafar,
    SubMenuImageEndor,
    SubMenuText,
    SubMenuEspaco,
    SubMenuTextoPrincipal,
    NavLink,
    SubMenuSubtitulo,
    EspacoRodape, 
    } from './styles'

import { Link } from 'react-router-dom'

const Body = (props) => {
    return <ContainerMain image={props.image}>
        <ContainerBody>
            <ContainerPlanet>
                <Planet planetImage={props.planetImage}/>
            </ContainerPlanet>
            
            <ContainerAreaTexto>
                <AreaTexto>
                    <TituloPrincipal>{props.tituloPrincipal}</TituloPrincipal>
                    <SubTituloPrincipal>{props.subTituloPrincipal}</SubTituloPrincipal>
                    <TextoPrincipal>{props.textPrincipal}</TextoPrincipal>
                    <ButtonArea>
                        <ButtonText>
                            <NavLink to="/cavaleiroJedi" className='Planet'>VIEW PLANET</NavLink>
                        </ButtonText>
                    </ButtonArea>
                </AreaTexto>
            </ContainerAreaTexto>
        </ContainerBody>

        <MenuInferior>

            <EspacoRodape/>

                <SubMenuPlanet>
                    <SubMenuImageTattoine TattoineImg={props.TattoineImg}/>
                        <SubMenuText>
                            <SubMenuTextoPrincipal>
                                <NavLink to="/tattoine">TATTOINE</NavLink>
                            </SubMenuTextoPrincipal>
                            <SubMenuSubtitulo>Desloate Beauty</SubMenuSubtitulo>
                        </SubMenuText>
                </SubMenuPlanet>

                <SubMenuPlanet>
                    <SubMenuImageCoruscant CoruscantImg={props.CoruscantImg}/>
                        <SubMenuText>
                            <SubMenuEspaco/>
                            <SubMenuTextoPrincipal>
                                <NavLink to="/coruscant">CORUSCANT</NavLink>
                            </SubMenuTextoPrincipal>
                            <SubMenuSubtitulo>Forest Splendor</SubMenuSubtitulo>
                            <SubMenuEspaco/>
                        </SubMenuText>
                </SubMenuPlanet>

                <SubMenuPlanet>
                    <SubMenuImageMustafar MustafarImg={props.MustafarImg}/>
                        <SubMenuText>
                            <SubMenuEspaco/>
                            <SubMenuTextoPrincipal>
                                <NavLink to="/mustafar">MUSTAFAR</NavLink>
                            </SubMenuTextoPrincipal>
                            <SubMenuSubtitulo>The fire Planet</SubMenuSubtitulo>
                            <SubMenuEspaco/>
                        </SubMenuText>
                </SubMenuPlanet>

                <SubMenuPlanet>
                    <SubMenuImageEndor EndorImg={props.EndorImg}/>
                        <SubMenuText>
                            <SubMenuEspaco/>
                            <SubMenuTextoPrincipal>
                                <NavLink to="/endor">ENDOR</NavLink>
                            </SubMenuTextoPrincipal>
                            <SubMenuSubtitulo>Hub of the Universe</SubMenuSubtitulo>
                            <SubMenuEspaco/>      
                        </SubMenuText>
                </SubMenuPlanet>
                
            <EspacoRodape/>

        </MenuInferior>
    </ContainerMain>
}

export default Body