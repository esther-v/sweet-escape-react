import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo-noir.png';
import { useScroll } from './useScroll';
import { fade } from '../animation';
import { motion } from 'framer-motion';



const APropos = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    const [element3, controls3] = useScroll();
    return(
        <StyledPres >
             
            <motion.img ref={element} variants={fade} animate={controls} initial="hidden" src={logo} alt="logo sweet-escape, oiseau noir qui vole" />
            <motion.h2 ref={element2} variants={fade} animate={controls2} initial="hidden">À propos</motion.h2>
           <div className="box">
              
                <motion.div ref={element3} variants={fade} animate={controls3} initial="hidden" className="apropos">
                    <p>Sweet Escape est un site dédié au voyage. Vous pouvez retrouver des bons plans dans les destinations de votre choix, vous pouvez également partager vos bons plans avec le reste de la communauté. Le contenu des bons plans est intégralement posté par les voyageurs. Chacun peut partager ses expériences en matière d'activités, sites incontournables, chemins de randos, plages sauvages, lieux cachés, petits restos, bars pour danser, auberges détente... 
                    Prochainement nous proposerons également une fonctionnalité permettant de trouver des covoyageurs. <br /> A suivre... </p>
                    <i className="fas fa-map-pin fas1"></i>
                    <i className="fas fa-map-pin fas2"></i>
                </motion.div>
            </div>
           
            
        
        </StyledPres>
    )
}

const StyledPres = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
    /* border: 1px solid green; */
    h2 {
            font-size: 40px;
            font-weight: 600;
            margin-bottom: 20px;
        }
  
    img{
        width: 100px;
        margin: 20px auto;
    }
    .box{
        width: 80%;
        /* border: 1px solid blue; */
        display: flex;
        align-items:center;
        justify-content:center;
        margin-bottom: 20px;
        background: linear-gradient(0deg, rgba(241,241,241,0.3701855742296919) 0%, rgba(255,255,255,0.4962359943977591) 0%), url("https://images.unsplash.com/photo-1478860409698-8707f313ee8b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")
    }
    p{
        width: 500px;
        padding: 20px;
        border: 1px dashed grey;
        background: rgba(255,255,255,0.7);
        line-height: 28px;
        margin-top: 20px;
    }
  
    .apropos{
        position: relative;
        /* border: 1px solid red; */
        width: 500px;
        margin-bottom: 20px;
    }
   .fas{
       position: absolute;
       color: #00909E;
       font-size: 28px;
   }
   .fas1{
       top: 8px;
       left: 5px;
   }
   .fas2{
        bottom: 8px;
        right: 1px;
   }
   @media (max-width: 720px) {
       .box{
           width: 90%;
       }
   }
   @media (max-width: 620px) {
       .apropos,p{
           width: 350px;
       }
   }
   @media (max-width: 460px) {
       .box{
           width: 100%;
       }
       .apropos,p{
           width: 280px;
       }
       p{
           line-height: 23px;
           font-size: 16px;
       }
   }
`

export default APropos;