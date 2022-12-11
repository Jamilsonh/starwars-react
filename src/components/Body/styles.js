import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ContainerMain = styled.div`
    display: flex;
    justify-content: space-between;
    background-image: url(${props => props.image});
    background-size: cover;
    width: 100%;
    height: 100%;
    flex-direction: column;
`

const ContainerBody = styled.div`
    display: flex;
    width: 100%;
    height: 800px;
    flex-direction: row;
`

const ContainerPlanet = styled.div`
    margin-top: 180px;
    max-height: 600px;
    max-width: 1200px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex: 1;
`

const Planet = styled.div`
    height: 100%;
    width: 100%;
    background-image: url(${props => props.planetImage});
    background-position: 90% 50%;
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
    flex: 1;
    align-items: center;
    justify-content: flex-start;
    margin-top: 180px;
`

const AreaTexto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const TextWithSpaceAndUppercase = styled.div`
    text-transform: uppercase;
    letter-spacing: 10px;
`

const TituloPrincipal = styled(TextWithSpaceAndUppercase)`
    font-size: 40px;
    font-family: 'Cinzel', serif;
    -webkit-transform:scale(5,1); /* Safari and Chrome */
    -moz-transform:scale(2,1); /* Firefox */
    -ms-transform:scale(2,1); /* IE 9 */
    -o-transform:scale(2,1); /* Opera */
    transform:scale(1,2); /* W3C */
    letter-spacing: 50px;
    height: 60px;
    font-weight: bold;
    //margin-top: 300px;
    //text-align: center;
    //align-items: center;
    //padding-bottom: -50px;
    color: white;
`

const SubTituloPrincipal = styled(TextWithSpaceAndUppercase)`
    //width: auto;
    //margin-top: 20px;
    //height: 100px;
    font-size: 21px;
    height: 40px;
    font-family: 'Cinzel', serif;
    letter-spacing: 14px;
    font-weight: initial;
    //margin-right: 30px;
    opacity: 0.6;
    //margin-bottom: 35px;
    text-align: center;
    color: white;
`

const TextoPrincipal = styled.div`
    //width: auto;
    //height: 100px;
    font-size: 20px;
    width: 900px;
    max-height: 100px;
    margin-bottom: 20px;
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
    //width: auto;
    //padding-bottom: 230px;
    text-align: center;

`

const ButtonText = styled.button`
    background: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 750;
    font-size: 16px;
    height: 50px;
    cursor: pointer;
    border-left: 7px solid yellow;
    border-right: 0px solid transparent;
    border-top: 0px;
    border-bottom: 0px;
    color: white;
    //width: 250px;
    outline: none;
    letter-spacing: 7px;
    text-align: center;

    background: liner-linear-gradient(to right, none);
    background-size: 200% 100%;
    background-position:right bottom;

    :hover {
        background: linear-gradient(to right, yellow 50%, transparent 10%);
        background-size: 250% 50%;
        background-position:left bottom;
        transition: all 0.2s ease-in-out;
    }

    :hover {
        color: white;
    }
`

const MenuInferior = styled.div`
    height: 240px;
    width: 100%;
    flex-direction: row;
    display: flex;
`

const SubMenuImageTattoine = styled.div`
    width: 200px;
    height: 200px;
    background-image: url(${props => props.TattoineImg});
    background-position: center;
    background-size: 160px 160px;
    background-repeat: no-repeat;
`

const SubMenuImageCoruscant = styled.div`
    width: 200px;
    height: 200px;
    background-image: url(${props => props.CoruscantImg});
    background-position: center;
    background-size: 160px 160px;
    background-repeat: no-repeat;
`

const SubMenuImageMustafar = styled.div`
    width: 200px;
    height: 200px;
    background-image: url(${props => props.MustafarImg});
    background-position: center;
    background-size: 160px 160px;
    background-repeat: no-repeat;
`

const SubMenuImageEndor = styled.div`
    width: 200px;
    height: 200px;
    background-image: url(${props => props.EndorImg});
    background-position: center;
    background-size: 160px 160px;
    background-repeat: no-repeat;
`

const SubMenuPlanet = styled.div`
    width: 500px;
    height: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const SubMenuText = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 300px;
    height: 150px;
`

const SubMenuEspaco = styled.div`
    flex: 15;
`

const SubMenuTextoPrincipal = styled.div`
    font-size: 30px;
    font-family: 'Cinzel', serif;
    letter-spacing: 10px;
    font-weight: bold;
    text-align: left;
    color: white;
    cursor: pointer;
    :hover {
        text-shadow: 0 0 5px black;
    }
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: white;
`

const SubMenuSubtitulo = styled.div`
    font-size: 20px;
    font-family: 'Cinzel', serif;
    letter-spacing: 5px;
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
}