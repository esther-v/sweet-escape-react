import React from 'react';
import styled from 'styled-components';
import profil from '../img/profil.jpg';


const LandingProfil = () => {
    return(
        <StyledLandProfil>
         
                <h2>Profil</h2>
       
        </StyledLandProfil>
    )
}

const StyledLandProfil = styled.div`
    height: 100vh;
    height: 60vh;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    background: linear-gradient(180deg, rgba(4,44,75,1) 0%, rgba(56,71,110,0) 80%), url(${profil}) center;  background-position: center;
    background-size: cover;
    
    h2{
        color: white;
        font-size: 4vw;
        text-shadow: 3px 4px 0 rgba(0,0,0,0.4);
        margin-top: 100px;
    }
`

export default LandingProfil;