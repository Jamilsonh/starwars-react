import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ContainerMain = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
`

const ContainerBody = styled.div`
    display: flex;
    width: 1600px;
    height: 750px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const ContainerPlanet = styled.div`
    height: 600px;
    width: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Planet = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${props => props.planetImage});
    background-position: 50% 50%;
    background-size: 650px 650px;
    background-repeat: no-repeat;
    border: 2px solid #EDFF1A;
    justify-content: flex-end;
    display: flex;
    border: none;
`

const ContainerAreaTexto = styled.div`
    display: flex;
    height: 600px;
    width: 700px;
    align-items: center;
    justify-content: center;
`

const AreaTexto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`

const TextWithSpaceAndUppercase = styled.div`
    text-transform: uppercase;
    letter-spacing: 10px;
`

const TituloPrincipal = styled(TextWithSpaceAndUppercase)`
    font-size: 40px;
    font-family: 'Cinzel', serif;
    letter-spacing: 40px;
    padding-left: 20px;
    width: 100%;
    height: 50px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    color: white;
    text-align: center;
    -webkit-transform:scale(5,1); /* Safari and Chrome */
    -moz-transform:scale(2,1); /* Firefox */
    -ms-transform:scale(2,1); /* IE 9 */
    -o-transform:scale(2,1); /* Opera */
    transform:scale(1,2); /* W3C */
`

const SubTituloPrincipal = styled(TextWithSpaceAndUppercase)`
    font-size: 21px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: 'Cinzel', serif;
    letter-spacing: 14px;
    font-weight: initial;
    opacity: 0.6;
    color: white;
`

const TextoPrincipal = styled.div`
    //width: auto;
    //height: 100px;
    font-size: 20px;
    display: flex;
    width: 100%;
    height: 100px;
    font-family: 'Cinzel', serif;
    font-family: 'Staatliches', cursive;
    //flex: 120;
    text-align: center;
    align-items: center;
    opacity: 0.7;
    color: white;
`

const ButtonArea = styled.div`
    align-items: center;
    text-align: center;
    height: 100px;
    display: flex;
`

const ButtonText = styled.button`
    background: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 750;
    font-size: 16px;
    height: 50px;
    width: 180px;
    cursor: pointer;
    border-left: 7px solid yellow;
    border-right: 0px solid transparent;
    border-top: 0px;
    border-bottom: 0px;
    color: black;
    outline: none;
    letter-spacing: 7px;
    text-align: center;

    background: linear-gradient(to right, none);
    background-size: 200% 100%;
    background-position: right bottom;

    :hover {
        background: linear-gradient(to right, yellow 50%, transparent 10%);
        background-size: 250% 50%;
        background-position:left bottom;
        transition: all 0.2s ease-in-out;
        color: black;
    }
`

const NavLinkBody = styled(Link)`
    text-decoration: none;
    color: #A87878;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: black;
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
`

const ContainerMenu = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

const MenuInferior = styled.div`
    height: 250px;
    width: 2000px;
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const SubMenuImageTattoine = styled.div`
    width: 180px;
    height: 200px;
    background-image: url(${props => props.TattoineImg});
    background-position: center;
    background-size: 160px 160px;
    background-repeat: no-repeat;
`

const SubMenuImageCoruscant = styled.div`
    width: 180px;
    height: 200px;
    background-image: url(${props => props.CoruscantImg});
    background-position: center;
    background-size: 160px 160px;
    background-repeat: no-repeat;
`

const SubMenuImageMustafar = styled.div`
    width: 180px;
    height: 200px;
    background-image: url(${props => props.MustafarImg});
    background-position: center;
    background-size: 160px 160px;
    background-repeat: no-repeat;
`

const SubMenuImageEndor = styled.div`
    width: 180px;
    height: 200px;
    background-image: url(${props => props.EndorImg});
    background-position: center;
    background-size: 160px 160px;
    background-repeat: no-repeat;
`

const SubMenuPlanet = styled.div`
    width: 420px;
    height: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const SubMenuText = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 200px;
    height: 60px;
`

const SubMenuEspaco = styled.div`
    flex: 15;
`

const SubMenuTextoPrincipal = styled.div`
    font-size: 25px;
    font-family: 'Cinzel', serif;
    letter-spacing: 8px;
    font-weight: bold;
    text-align: left;
    color: white;
    cursor: pointer;
    :hover {
        text-shadow: 0 0 5px black;
    }
`

const SubMenuSubtitulo = styled.div`
    font-size: 15px;
    font-family: 'Cinzel', serif;
    letter-spacing: 3px;
    font-weight: bold;
    text-align: left;
    color: white;
`

const EspacoRodape = styled.div`
    flex: 1;
`

export {
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
    ContainerMenu,
    NavLinkBody,
}