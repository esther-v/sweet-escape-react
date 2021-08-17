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
    height: 100vh;
    .box-accueil{
        height: 70vh;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        background: linear-gradient(180deg, rgba(4,44,75,1) 0%, rgba(56,71,110,0) 80%), url(${covoyageurs}) center;  background-position: center;
        background-size: cover;
    }
    h2{
        color: white;
        font-size: 4vw;
        text-shadow: 3px 4px 0 rgba(0,0,0,0.4);
        margin-top: 100px;
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
`

export default LandingCovoyageurs;