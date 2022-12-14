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
    ContainerMenu,
    EspacoRodape, 
    NavLinkBody,
    } from './styles'

import { Link } from 'react-router-dom'

const Body = (props) => {
    return (
        <ContainerMain>
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
                                <NavLinkBody to="/cavaleiroJedi">VIEW PLANET</NavLinkBody>
                            </ButtonText>
                        </ButtonArea>
                    </AreaTexto>
                </ContainerAreaTexto>
            </ContainerBody>


            <ContainerMenu>
                <MenuInferior>
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
                                <SubMenuTextoPrincipal>
                                    <NavLink to="/coruscant">CORUSCANT</NavLink>
                                </SubMenuTextoPrincipal>
                                <SubMenuSubtitulo>Forest Splendor</SubMenuSubtitulo>
                                
                            </SubMenuText>
                    </SubMenuPlanet>

                    <SubMenuPlanet>
                        <SubMenuImageMustafar MustafarImg={props.MustafarImg}/>
                            <SubMenuText>
                                <SubMenuTextoPrincipal>
                                    <NavLink to="/mustafar">MUSTAFAR</NavLink>
                                </SubMenuTextoPrincipal>
                                <SubMenuSubtitulo>The fire Planet</SubMenuSubtitulo>
                                
                            </SubMenuText>
                    </SubMenuPlanet>

                    <SubMenuPlanet>
                        <SubMenuImageEndor EndorImg={props.EndorImg}/>
                            <SubMenuText>
                                <SubMenuTextoPrincipal>
                                    <NavLink to="/endor">ENDOR</NavLink>
                                </SubMenuTextoPrincipal>
                                <SubMenuSubtitulo>Hub of the Universe</SubMenuSubtitulo>                            
                            </SubMenuText>
                    </SubMenuPlanet>
                </MenuInferior>
            </ContainerMenu>
        </ContainerMain>
    )
}

export default Body