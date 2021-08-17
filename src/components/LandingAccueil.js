import React from 'react';
import styled from 'styled-components';
import accueil from '../img/accueil.png';
import cloud1 from '../img/cloud1.png';
import cloud2 from '../img/cloud2.png';
import {motion} from 'framer-motion';
// import Wave from './Wave';

const LandingAccueil = () => {
    return(
        <StyledLandAccueil>
            <motion.img 
                initial={{y: -5}}
                animate={{y: 0}}
                transition={{ duration: 1, yoyo:2}}
            
            className="cloud" src={cloud1} alt="nuage" />
            <motion.h1
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ delay: 0.2, duration: 1.9}}
            >Sweet Escape.</motion.h1>
            <motion.img 
                initial={{y: -5}}
                animate={{y: 0}}
                transition={{ delay: 0.3, duration: 1, yoyo:2}}
            className="cloud" src={cloud2} alt="nuage" />
            {/* <Wave/> */}
        </StyledLandAccueil>
    )
}

const StyledLandAccueil = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background:  linear-gradient(180deg, rgba(4,44,75,1) 0%, rgba(56,71,110,0) 80%), url(${accueil}) top center no-repeat;
    background-position: center;
    background-size: cover;
    h1{
        color: white;
        font-size: 55px;
        text-shadow: 3px 4px 0 rgba(0,0,0,0.4);
        font-family: 'Parisienne', cursive;
    }
    .cloud {
        width: 30%;
  }
  @media (max-width: 720px) {
      h1{
          font-size: 45px;
      }
      .cloud{
          width: 25%;
      }
  }
  @media (max-width: 470px) {
      h1{
          font-size: 36px;
      }
  }
  @media (max-width: 376px) {
      h1 {
          font-size: 30px;
      }
  }
`

export default LandingAccueil;