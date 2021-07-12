import React from 'react';
import styled from 'styled-components';
import cloud1 from '../img/cloud1.png';
import cloud2 from '../img/cloud2.png';
import Wave from './Wave';

const LandingAccueil = () => {
    return(
        <StyledLandAccueil>
            <img className="cloud" src={cloud1} alt="nuage" />
            <h1>Sweet Escape.</h1>
            <img className="cloud" src={cloud2} alt="nuage" />
            <Wave/>
        </StyledLandAccueil>
    )
}

const StyledLandAccueil = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background:  linear-gradient(180deg, rgba(4,44,75,1) 0%, rgba(56,71,110,0) 80%), url('https://images.unsplash.com/photo-1546948630-1149ea60dc86?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80') top center no-repeat;
    background-position: center;
    background-size: cover;
    h1{
        color: white;
        font-size: 5vw;
        text-shadow: 3px 4px 0 rgba(0,0,0,0.4);
    }
    .cloud {
        width: 30%;
  }
`

export default LandingAccueil;