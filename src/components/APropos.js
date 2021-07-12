import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo-noir.png';

const APropos = () => {
    return(
        <StyledPres>
            <img src={logo} alt="logo sweet-escape, oiseau noir qui vole" />
            <h1>A propos</h1>
            <p>Sweet Escape est un site dédié au voyage. Vous pouvez retrouver des bons plans dans les destinations de votre choix, vous pouvez également partager vos bons plans avec le reste de la communauté. Le contenu des bons plans est intégralement posté par les voyageurs. Chacun peut partager ses expériences en matière d'activités, sites incontournables, chemins de randos, plages sauvages, lieux cachés, petits restos, bars pour danser, auberges détente... 
            Prochainement nous proposerons également une fonctionnalité permettant de trouver des covoyageurs. A suivre </p>
        </StyledPres>
    )
}

const StyledPres = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 100px;
    }
    p{
        padding: 20px 200px;
    }
`

export default APropos;