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
        margin-top: 100px;
        font-size: 50px;
    
        text-shadow: 4px 2px 2px rgba(0, 0, 0, 1);
        text-align: center;
       
    }
`

export default LandingProfil;