import React from 'react';
import bonsplans1 from '../img/bonsplans1.png';
import styled from 'styled-components';

const LandingBonsPlans = () => {
    return(
        <StyledLandBonsPlans>
            <h2>Bons plans voyage</h2>
        </StyledLandBonsPlans>
    )
}

const StyledLandBonsPlans = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background:  linear-gradient(180deg, rgba(4,44,75,1) 0%, rgba(56,71,110,0) 80%), url(${bonsplans1}) center no-repeat;
    background-position: center;
    background-size: cover;
    
    h2{
        color: white;
        font-size: 4vw;
        text-shadow: 3px 4px 0 rgba(0,0,0,0.4);
    }
`

export default LandingBonsPlans;