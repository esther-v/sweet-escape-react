import React from 'react';
import styled from 'styled-components';
import covoyageurs from '../img/covoyageurs.jpg';

const LandingCovoyageurs = () => {
    return(
        <StyledLandCovoyage>
            <div className="box-accueil">
                <h2>Co-voyageurs</h2>
            </div>
            <div className="message-info">
                <p>Trouver des voyageurs du monde entier qui partent au même endroit que vous et partager un moment ensemble... </p>
                <p className="creation">Cette fonctionnalité est en cours de création...
                </p>
            </div>
        </StyledLandCovoyage>
    )
}

const StyledLandCovoyage = styled.div`
    
    .box-accueil{
        height: 80vh;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        background: linear-gradient(180deg, rgba(4,44,75,1) 0%, rgba(56,71,110,0) 80%), url(${covoyageurs}) center;  background-position: center;
        background-size: cover;
    }
    h2{
        color: white;
        margin-top: 100px;
        font-size: 50px;
        font-weight: lighter;
        text-shadow: 4px 2px 2px rgba(0, 0, 0, 1);
    }
    .message-info{
        background-color: #E1E5EA;
        padding: 40px;
        p{
            font-size: 25px;
        }
        .creation {
            font-weight: bold;
            font-style: italic;
            margin-top: 30px;
        }
    }
    @media (max-width: 600px){
        .message-info p{
            font-size: 20px;
        }
    }
`

export default LandingCovoyageurs;