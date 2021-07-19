import React from 'react';
import styled from 'styled-components';
import sea from '../img/sea.png';
import mountainlake from '../img/mountain-lake.png';
import { motion } from 'framer-motion';

const buttonVariants = {
    hover: {
        scale: [1,1.1,1,1.1,1],
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255"
    }
}

const SectionBonsPlans = () => {
    return(
        <StyledSectionTips>
            <div className="box">
                <div className="container-text">
                    <h2>Bons plans</h2>
                    <p>Retrouvez toutes les expériences postées par les voyageurs.</p>
                </div>
            </div>
            <motion.button
                variants={buttonVariants}
                whileHover="hover" 
            >En savoir plus
            </motion.button>
        </StyledSectionTips>
    )
}

const StyledSectionTips = styled.div`
    margin: 20px 0 0;
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    background: url(${mountainlake}) center no-repeat;
    background-size: cover;
    padding: 80px 0;
    .box{
        background: white;
        /* border: 1px solid blue; */
        width: 500px;
        
    }
    .container-text{
        /* border: 1px solid red; */
        width: 500px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        padding: 20px 40px;
        background: url(${sea}) top no-repeat;
        font-weight: 600;
        background-size: cover;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        box-shadow: 0px 0px 50px 10px #fff;
        h2 {
            font-size: 60px;
            font-weight: 600;
            margin-bottom: 20px;
        }
        p{
            font-weight: 600;
            font-size: 40px;
            text-align: center;
        }
    }
    button {
        display: block;
        margin: 20px auto 0;
        padding: 15px 20px;
        background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
        color: white;
        font-weight: bold;
        border-radius: 8px;
        border:none;
    }
    
`



export default SectionBonsPlans;