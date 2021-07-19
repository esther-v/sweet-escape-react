import React from 'react';
import bonsplans2 from '../img/bonsplans2.png';
import styled from 'styled-components';

const LandingBonsPlans = () => {
    return(
        <StyledLandBonsPlans>
            <h2>Bons plans voyage</h2>
        </StyledLandBonsPlans>
    )
}

const StyledLandBonsPlans = styled.div`
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background:  linear-gradient(180deg, rgba(4,44,75,1) 0%, rgba(56,71,110,0) 80%), url(${bonsplans2}) center no-repeat;
    background-position: center;
    background-size: cover;
    
    h2{
        color: white;
        font-size: 4vw;
        font-weight: 500;
        text-shadow: 3px 4px 0 rgba(0,0,0,0.4);
    }
`

export default LandingBonsPlans;