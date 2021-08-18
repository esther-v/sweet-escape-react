import React from 'react';
import searoad from '../img/searoad.png';
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
    background:  linear-gradient(180deg, rgba(4,44,75,1) 0%, rgba(56,71,110,0) 80%), url(${searoad}) center no-repeat;
    background-position: center;
    background-size: cover;
    
    h2{
        color: white;
        font-size: 50px;
        font-weight: 500;
        text-shadow: 4px 2px 2px rgba(0, 0, 0, 1);
        text-align: center;
        padding: 0 10px;
    }
`

export default LandingBonsPlans;